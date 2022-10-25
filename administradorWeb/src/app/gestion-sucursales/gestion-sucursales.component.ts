import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../interfaces/sucursal';
import { BotonesService } from '../services/botones.service';
import { SucursalService } from '../services/sucursal.service';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent extends BotonesService<Sucursal> implements OnInit {
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(service:SucursalService) {
    super();
    service.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
