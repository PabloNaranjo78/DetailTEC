import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    fechaGerente: "",
    gerente:0,
  }

  editMode = true;
  listaTrabajadores:Trabajador[] = [];

  constructor(private service:SucursalService, private route:Router, private rou:ActivatedRoute, private trabajadorService:TrabajadorService) { }

  onGuardar(): void{
    if (this.editMode){
      /**Solicitud HTTP para el PUT en el API */
    this.service.update(this.objeto).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        this.service.avisoSuccess("actualizado", this.objeto.nombreSuc);
        this.route.navigate(['gestion-sucursales'])},
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        this.service.avisoError(err.error)}
    })
    } else {
      console.log(this.objeto)
      /**Solicitud HTTP para el POST en el API */
    this.service.add(this.objeto).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        this.service.avisoSuccess("añadido", this.objeto.nombreSuc);
        this.route.navigate(['gestion-sucursales'])  
      },
      /*Mensaje emergente de error*/
      error: (err) =>{
        console.log(err);
        this.service.avisoError(err.error)}
    })
    } 
    
  }

  onEliminar(): void{ 
    this.service.delete(this.objeto.nombreSuc).subscribe({
    /*Mensaje emergente de exito*/
    
    next: (data) => {
      this.service.avisoSuccess("eliminado", this.objeto.nombreSuc);
      this.route.navigate(['gestion-sucursales'])},
    /*Mensaje emergente de error*/
    error: (err) =>{
      this.service.avisoError(err.error)}
  })
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
