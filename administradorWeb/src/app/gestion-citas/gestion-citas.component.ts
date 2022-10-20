import { Component, OnInit } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { BotonesService } from '../services/botones.service';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent extends BotonesService<Cita> implements OnInit {
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(citaService:CitaService) {
    super();
    citaService.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
