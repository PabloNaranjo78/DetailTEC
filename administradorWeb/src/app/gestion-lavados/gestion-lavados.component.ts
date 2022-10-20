import { Component, OnInit } from '@angular/core';
import { Lavado } from '../interfaces/lavado';
import { LavadoService } from '../services/lavado.service';

@Component({
  selector: 'app-gestion-lavados',
  templateUrl: './gestion-lavados.component.html',
  styleUrls: ['./gestion-lavados.component.css']
})
export class GestionLavadosComponent implements OnInit {
  listaLavados: Lavado[] = [];

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
    if(valor+5 > this.listaLavados.length){
      sub = this.listaLavados.slice(valor)
    } else {
      sub = this.listaLavados.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    if(valor+5 > this.listaLavados.length){
       return sub.slice(0,valor+5-this.listaLavados.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(lavadoService:LavadoService) {
    lavadoService.getList().subscribe((data) =>{
      this.listaLavados = data
    })
  }

  ngOnInit(): void {
  }

}
