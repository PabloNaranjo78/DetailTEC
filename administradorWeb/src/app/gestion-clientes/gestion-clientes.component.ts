import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { BotonesService } from '../services/botones.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent extends BotonesService<Cliente> implements OnInit {

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(service:ClienteService) {
    super();
    service.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
