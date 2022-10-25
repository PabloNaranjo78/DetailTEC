import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../interfaces/cita';
import { Cliente } from '../interfaces/cliente';
import { Lavado } from '../interfaces/lavado';
import { Sucursal } from '../interfaces/sucursal';
import { Trabajador } from '../interfaces/trabajador';
import { CitaService } from '../services/cita.service';
import { ClienteService } from '../services/cliente.service';
import { LavadoService } from '../services/lavado.service';
import { SucursalService } from '../services/sucursal.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-nueva-cit',
  templateUrl: './nueva-cit.component.html',
  styleUrls: ['./nueva-cit.component.css']
})
export class NuevaCitComponent implements OnInit {
  objeto: Cita = {
    placa:0,
    fechaCita:"",
    idEmpleado:0,
    sucursal:"",
    lavado:"",
    idCliente:0,
  }
  listaTrabajadores:Trabajador[] = [];
  listaClientes:Cliente[] = [];
  listaSucursales:Sucursal[] = [];
  listaLavados:Lavado[] = []

  editMode = true;


  constructor(private route:Router, private rou:ActivatedRoute, private service:CitaService, private trabService:TrabajadorService, private sucService:SucursalService, private lavService:LavadoService, private cliService:ClienteService,) { }

  ngOnInit(): void {
    this.onGetTrabajadores();
    this.onGetClientes();
    this.onGetSucursales();
    this.onGetLavados();
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false;
    } else {
      this.service.get(this.rou.snapshot.params['id']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.objeto = data[0];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      });
    }
  }
  onGuardar(){
    console.log(this.objeto);
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.placa)
    } else {
      this.service.onNuevo(this.objeto,this.objeto.placa)
    }
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.placa)
  }

  onCancelar(): void{ 
    this.service.onCancelar()
  }

  onGetTrabajadores(){
    this.trabService.getList().subscribe((data) => this.listaTrabajadores = data);
  }
  onGetClientes(){
    this.cliService.getList().subscribe((data) => this.listaClientes = data);
  }
  onGetSucursales(){
    this.sucService.getList().subscribe((data) => this.listaSucursales = data);
  }
  onGetLavados(){
    this.lavService.getList().subscribe((data) => this.listaLavados = data);
  }

}
