import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../interfaces/sucursal';
import { SucursalService } from '../services/sucursal.service';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent implements OnInit {
  listaSucursales: Sucursal[] = [];

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
    if(valor+5 > this.listaSucursales.length){
      sub = this.listaSucursales.slice(valor)
    } else {
      sub = this.listaSucursales.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    console.log(valor);
    if(valor+5 > this.listaSucursales.length){
       return sub.slice(0,valor+5-this.listaSucursales.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(sucursalService:SucursalService) {
    sucursalService.getAllSucursal().subscribe((data) =>{
      this.listaSucursales = data
    })
  }

  ngOnInit(): void {
  }

}
