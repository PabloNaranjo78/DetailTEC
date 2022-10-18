import { Component, OnInit } from '@angular/core';
import { Insumo } from '../interfaces/insumo';
import { InsumoService } from '../services/insumo.service';

@Component({
  selector: 'app-gestion-insumos',
  templateUrl: './gestion-insumos.component.html',
  styleUrls: ['./gestion-insumos.component.css']
})
export class GestionInsumosComponent implements OnInit {
  listaInsumos: Insumo[] = [];

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
    if(valor+5 > this.listaInsumos.length){
      sub = this.listaInsumos.slice(valor)
    } else {
      sub = this.listaInsumos.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    if(valor+5 > this.listaInsumos.length){
       return sub.slice(0,valor+5-this.listaInsumos.length)
    } else {
      return []
    }
  }

  
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los insumos disponibles a la base de datos*/
  constructor(insumoService:InsumoService) {
    insumoService.getAllInsumos().subscribe((data) =>{
      this.listaInsumos = data
    })
  }

  ngOnInit(): void {
  }

}
