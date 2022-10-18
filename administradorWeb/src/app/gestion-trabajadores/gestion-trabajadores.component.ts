import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../interfaces/trabajador';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})
export class GestionTrabajadoresComponent implements OnInit {
  listaTrabajadores: Trabajador[] = [];

  /*Crea filas de 5 unidades a partir de índice
  valor:number 
  return: boolean*/
  crearFila(valor:number){
    if (valor%5==0){
      return true;
    }
    return false;
  }
  /*Rellena la lista con elementos nulos para conservar el espaciado
  valor:number
  return: list*/
  subLista(valor:number){
    var sub=[];
    if(valor+5 > this.listaTrabajadores.length){
      sub = this.listaTrabajadores.slice(valor)
    } else {
      sub = this.listaTrabajadores.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    console.log(valor);
    if(valor+5 > this.listaTrabajadores.length){
       return sub.slice(0,valor+5-this.listaTrabajadores.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(trabajadorService:TrabajadorService) {
    trabajadorService.getAllSucursal().subscribe((data) =>{
      this.listaTrabajadores = data
    })
  }

  ngOnInit(): void {
  }

}
