import { Component, OnInit } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent implements OnInit {
  listaCitas: Cita[] = [];

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
    if(valor+5 > this.listaCitas.length){
      sub = this.listaCitas.slice(valor)
    } else {
      sub = this.listaCitas.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    if(valor+5 > this.listaCitas.length){
       return sub.slice(0,valor+5-this.listaCitas.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(citaService:CitaService) {
    citaService.getAllCitas().subscribe((data) =>{
      this.listaCitas = data
    })
  }

  ngOnInit(): void {
  }

}
