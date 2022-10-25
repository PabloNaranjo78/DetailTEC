import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';
import { ServicioAPIService } from '../services/servicio-api.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit {
  /**Proveedor temporal para enviar a ser verificado
   * input: Proveedor Interface
   */
  objeto:Proveedor={
    cedulaJur:0,
    nombre:"",
    email:"",
    contacto:"",
    direccion:"",
  }

  editMode = true;

  constructor(private service:ProveedorService, private route:Router, private rou:ActivatedRoute) { }

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
  onCancelar(): void{ 
    this.service.onCancelar()
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
