import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminSucursal, Sucursal } from '../interfaces/sucursal';
import { Trabajador } from '../interfaces/trabajador';
import { AdminSucursalService, SucursalService } from '../services/sucursal.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styleUrls: ['./nueva-sucursal.component.css']
})
export class NuevaSucursalComponent implements OnInit {
  /**Sucursal temporal para enviar a ser verificado
   * input: Sucursal Interface
   */
  objeto:Sucursal={
    nombreSuc:"",
    fechaApert: "",
    telefono:0,
    provincia:"",
    canton:"",
    distrito:"",
    tiempoDispo:0
  }

  admin:adminSucursal={
    sucursal:"",
    fechaInicio: "",
    idTrabajador:0,
  }

  editMode = true;
  listaTrabajadores:Trabajador[] = [];

  constructor(private service:SucursalService, private adminService:AdminSucursalService, private route:Router, private rou:ActivatedRoute, private trabajadorService:TrabajadorService) { }
  

  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombreSuc);
      this.adminService.onActualizar(this.admin, this.admin.idTrabajador);
      
    } else {
      this.service.onNuevo(this.objeto,this.objeto.nombreSuc);
      this.adminService.onNuevo(this.admin, this.admin.idTrabajador);
    }
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.nombreSuc)
  }

  onCancelar(): void{ 
    this.service.onCancelar()
  }

  ngOnInit(): void {
    this.trabajadorService.getList().subscribe({
      next: (data) => {
        this.listaTrabajadores = data;
      }, 
      error: (err) => {
        this.service.avisoError(err.error)
      }
    })
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false;
    } else {
      console.log(this.rou.snapshot.params['id'])
      this.service.get(this.rou.snapshot.params['id']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.objeto = data[0];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      });
      this.adminService.get(this.rou.snapshot.params['id']).subscribe({ 
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.admin =  data[0]
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      })
    }
  }

}
