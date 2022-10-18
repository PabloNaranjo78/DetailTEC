import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  proveedor:Proveedor={
    cedulaJur:0,
    nombre:"",
    email:"",
    contacto:"",
    direccion:"",
  }

  editMode = true;

  constructor(private proveedorService:ProveedorService, private route:Router, private rou:ActivatedRoute) { }

  onGuardar(): void{
    if (this.editMode){
      /**Solicitud HTTP para el PUT en el API */
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has actualizado a ' + this.proveedor.nombre + ' como Proveedor'})
      this.route.navigate(['gestion-proveedores'])},
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        Swal.fire({
        icon: 'error',
        title: '¡Algo ha salido mal!',
        text: err.error})}
    })
    } else {
      /**Solicitud HTTP para el POST en el API */
    this.proveedorService.guardarProveedor(this.proveedor).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has agregado a ' + this.proveedor.nombre + ' como Proveedor'})
      this.route.navigate(['gestion-proveedores'])},
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        Swal.fire({
        icon: 'error',
        title: '¡Algo ha salido mal!',
        text: err.error})}
    })
    }
    
  }

  onEliminar(): void{ 
    this.proveedorService.eliminarProveedor(this.proveedor.cedulaJur).subscribe({
    /*Mensaje emergente de exito*/
    
    next: (data) => {
      Swal.fire({
      icon: 'success',
      title: '¡Has eliminado a ' + this.proveedor.nombre + ' como Proveedor'})
    this.route.navigate(['gestion-proveedores'])},
    /*Mensaje emergente de error*/
    error: (err) =>{
      Swal.fire({
      icon: 'error',
      title: '¡Algo ha salido mal!',
      text: err.error})}
  })
    }

  ngOnInit(): void {
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false;
    } else {
      this.proveedorService.getProveedor(this.rou.snapshot.params['id']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.proveedor = data[0];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          Swal.fire({
          icon: 'error',
          title: '¡No se ha encontrado el proveedor!',
          text: err.error})}
      });
    }
  }

}
