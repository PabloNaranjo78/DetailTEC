import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { adminSucursal, Sucursal } from '../interfaces/sucursal';
import { Trabajador } from '../interfaces/trabajador';
import { SucursalService } from '../services/sucursal.service';
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
   sucursal:Sucursal={
    nombreSuc:"",
    fechaApert: "",
    telefono:0,
    pronvincia:"",
    canton:"",
    distrito:"",
    tiempoDispo:0
  }

  admin:adminSucursal={
    sucursal:"",
    fechaGerente: "",
    gerente:0,
  }

  editMode = true;
  listaTrabajadores:Trabajador[] = [];

  constructor(private sucursalService:SucursalService, private route:Router, private rou:ActivatedRoute, private trabajadorService:TrabajadorService) { }

  onGuardar(): void{
    if (this.editMode){
      /**Solicitud HTTP para el PUT en el API */
    this.sucursalService.actualizarSucursal(this.sucursal).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has actualizado a ' + this.sucursal.nombreSuc + ' como Sucursal'})
      this.route.navigate(['gestion-sucursales'])},
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        Swal.fire({
        icon: 'error',
        title: '¡Algo ha salido mal!',
        text: err.error})}
    })
    } else {
      console.log(this.sucursal)
      /**Solicitud HTTP para el POST en el API */
    this.sucursalService.guardarSucursal(this.sucursal).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has agregado a ' + this.sucursal.nombreSuc + ' como Sucursal'})
      this.route.navigate(['gestion-sucursales'])},
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
    this.sucursalService.eliminarSucursal(this.sucursal.nombreSuc).subscribe({
    /*Mensaje emergente de exito*/
    
    next: (data) => {
      Swal.fire({
      icon: 'success',
      title: '¡Has eliminado a ' + this.sucursal.nombreSuc + ' como Sucursal'})
    this.route.navigate(['gestion-sucursales'])},
    /*Mensaje emergente de error*/
    error: (err) =>{
      Swal.fire({
      icon: 'error',
      title: '¡Algo ha salido mal!',
      text: err.error})}
  })
    }

  ngOnInit(): void {
    this.trabajadorService.getAllTrabajador().subscribe({
      next: (data) => {
        this.listaTrabajadores = data;
      }, 
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: '¡No se pudo cargar los empleados!',
          text: err.error})
      }
    })
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false;
    } else {
      this.sucursalService.getSucursal(this.rou.snapshot.params['id']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.sucursal = data[0];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          Swal.fire({
          icon: 'error',
          title: '¡No se ha encontrado el sucursal!',
          text: err.error})}
      });
    }
  }

}
