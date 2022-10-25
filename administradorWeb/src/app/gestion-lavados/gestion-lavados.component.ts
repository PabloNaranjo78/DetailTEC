import { Component, OnInit } from '@angular/core';
import { Lavado } from '../interfaces/lavado';
import { BotonesService } from '../services/botones.service';
import { LavadoService } from '../services/lavado.service';

@Component({
  selector: 'app-gestion-lavados',
  templateUrl: './gestion-lavados.component.html',
  styleUrls: ['./gestion-lavados.component.css']
})
export class GestionLavadosComponent extends BotonesService<Lavado> implements OnInit {
  
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(lavadoService:LavadoService) {
    super();
    lavadoService.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
