import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Insumo } from '../interfaces/insumo';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-nuevo-insumo',
  templateUrl: './nuevo-insumo.component.html',
  styleUrls: ['./nuevo-insumo.component.css']
})
export class NuevoInsumoComponent implements OnInit {
  /**Insumo temporal para enviar a ser verificado
   * input: Insumo Interface
   */
  insumo:Insumo={
    nombrePro:"",
    marcaPro:"",
    costo:0,
  }

  editMode = true;

  constructor(private insumoService:InsumoService, private route:Router, private rou:ActivatedRoute) { }

  onGuardar(): void{
    if (this.editMode){
      /**Solicitud HTTP para el PUT en el API */
    this.insumoService.actualizarInsumo(this.insumo).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has actualizado a ' + this.insumo.nombrePro + ' como Insumo'})
      this.route.navigate(['gestion-insumos'])},
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
    this.insumoService.guardarInsumo(this.insumo).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has agregado a ' + this.insumo.nombrePro + ' como Insumo'})
      this.route.navigate(['gestion-insumos'])},
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

  onProveedores(){

  }

  onEliminar(): void{ 
    this.insumoService.eliminarInsumo(this.insumo.marcaPro,this.insumo.nombrePro).subscribe({
    /*Mensaje emergente de exito*/
    
    next: (data) => {
      Swal.fire({
      icon: 'success',
      title: '¡Has eliminado a ' + this.insumo.nombrePro + ' como Insumo'})
    this.route.navigate(['gestion-insumos'])},
    /*Mensaje emergente de error*/
    error: (err) =>{
      Swal.fire({
      icon: 'error',
      title: '¡Algo ha salido mal!',
      text: err.error})}
  })
    }

  ngOnInit(): void {
    console.log(this.rou.snapshot.params['marca']);
    console.log(this.rou.snapshot.params['nombre']);
    if(this.rou.snapshot.params['marca']==undefined){
      this.editMode = false;
    } else {
      this.insumoService.getInsumo(this.rou.snapshot.params['marca'],this.rou.snapshot.params['nombre']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.insumo = data[0];
          console.log(data)
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          Swal.fire({
          icon: 'error',
          title: '¡No se ha encontrado el insumo!',
          text: err.error})}
      });
    }
  }

}
