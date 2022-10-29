import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../interfaces/cita';
import { BotonesService } from '../services/botones.service';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent extends BotonesService<Cita> implements OnInit {
  user:number=0;
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(citaService:CitaService, private rou:ActivatedRoute, protected route:Router) {
    super();
    citaService.id = this.rou.snapshot.params['id']
    this.user = this.rou.snapshot.params['id'];
    citaService.get("cliente/" + this.rou.snapshot.params['id']).subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

  onNuevo(){
    this.route.navigate(["nueva-cita",this.user])
  }

  onActualizar(placa:number){
    this.route.navigate(["actualizar-cita",this.user,placa])
  }

}
