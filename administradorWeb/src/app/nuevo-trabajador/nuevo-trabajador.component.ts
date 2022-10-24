import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../interfaces/trabajador';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-nuevo-trabajador',
  templateUrl: './nuevo-trabajador.component.html',
  styleUrls: ['./nuevo-trabajador.component.css']
})
export class NuevoTrabajadorComponent implements OnInit {
  /**Proveedor temporal para enviar a ser verificado
   * input: Proveedor Interface
   */
  objeto:Trabajador={
    idTrabajador:0,
    nacimiento:"",
    contrasena:"",
    rol:"",
    nombre:"",
    apellidos:"",
    fechaIngreso:"",
    tipoPago:""
  }

  editMode = true;

  constructor(private service:TrabajadorService, private route:Router, private rou:ActivatedRoute) { }

  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombre)
    } else {
      this.service.onNuevo(this.objeto,this.objeto.nombre)
    }
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.nombre)
  }

  ngOnInit(): void {
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

}
