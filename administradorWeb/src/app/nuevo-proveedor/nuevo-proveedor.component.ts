import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';

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
      /**Solicitud HTTP para el PUT en el API */
    this.service.update(this.objeto).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        this.service.avisoSuccess("actualizado", this.objeto.nombre);
        this.route.navigate(['gestion-proveedores'])
      },
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        this.service.avisoError(err.error)}
    })
    } else {
      /**Solicitud HTTP para el POST en el API */
    this.service.add(this.objeto).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        this.service.avisoSuccess("añadido", this.objeto.nombre);
        this.route.navigate(['gestion-proveedores'])  
      },
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        this.service.avisoError(err.error)}
    })
    }
    
  }

  onEliminar(): void{ 
    this.service.delete(this.objeto.cedulaJur).subscribe({
    /*Mensaje emergente de exito*/
    
    next: (data) => {
      this.service.avisoSuccess("eliminado", this.objeto.nombre);
      this.route.navigate(['gestion-proveedores'])  },
    /*Mensaje emergente de error*/
    error: (err) =>{
      this.service.avisoError(err.error)}
  })
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
