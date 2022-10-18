import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {
  listaClientes: Cliente[] = [];

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
    if(valor+5 > this.listaClientes.length){
      sub = this.listaClientes.slice(valor)
    } else {
      sub = this.listaClientes.slice(valor, valor+5);
    }
    return sub;
  }

  completar(valor:number){
    var sub=[1,2,3,4,5];
    console.log(valor);
    if(valor+5 > this.listaClientes.length){
       return sub.slice(0,valor+5-this.listaClientes.length)
    } else {
      return []
    }
  }

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(clienteService:ClienteService) {
    clienteService.getAllClientes().subscribe((data) =>{
      this.listaClientes = data
    })
  }

  ngOnInit(): void {
  }

}
