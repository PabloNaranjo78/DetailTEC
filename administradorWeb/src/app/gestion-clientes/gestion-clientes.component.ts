import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

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
      while(sub.length!= 5){
        sub.push({
          idCliente:0,
          usuario:"",
          contraseña:"",
          infoContacto:"",
          nombre:"",
          email:""
      });
      }
    } else {
      sub = this.listaClientes.slice(valor, valor+5);
    }
    return sub;
  }

  /*Valida si el objeto tiene un idCliente Valido 
  objeto: Cliente[]
  return: boolean*/
  esValido(object:any){
    if (object.nombre==""){
      return false;
    }
    return true;
  }
/*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  /*constructor(clienteService:ClienteService) {
    clienteService.getAllClientes().subscribe((data) =>{
      this.listaClientes = data
    })
   }*/

   constructor(){
    this.listaClientes=[
      {
          idCliente:2345,
          usuario:"andy",
          contraseña:"asdfasd",
          infoContacto:"asdasdf",
          nombre:"asdf",
          email:"asdf"
      },
      {
        idCliente:867786,
        usuario:"andy",
        contraseña:"asdfasd",
        infoContacto:"asdasdf",
        nombre:"asdf",
        email:"asdf"
    }
    ]
   }

  ngOnInit(): void {
  }

}
