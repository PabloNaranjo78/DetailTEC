import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../interfaces/trabajador';
import { BotonesService } from '../services/botones.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})
export class GestionTrabajadoresComponent extends BotonesService<Trabajador> implements OnInit {
 

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(service:TrabajadorService) {
    super();
    service.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
