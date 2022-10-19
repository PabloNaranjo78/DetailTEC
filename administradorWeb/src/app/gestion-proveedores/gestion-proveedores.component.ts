import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-gestion-proveedores',
  templateUrl: './gestion-proveedores.component.html',
  styleUrls: ['./gestion-proveedores.component.css']
})
export class GestionProveedoresComponent implements OnInit {
  listaProveedores: Proveedor[] = [];

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
    if(valor+5 > this.listaProveedores.length){
      sub = this.listaProveedores.slice(valor)
    } else {
      sub = this.listaProveedores.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    if(valor+5 > this.listaProveedores.length){
       return sub.slice(0,valor+5-this.listaProveedores.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(proveedorService:ProveedorService) {
    proveedorService.getAllProveedor().subscribe((data) =>{
      this.listaProveedores = data
    })
  }

  ngOnInit(): void {
  }

}
