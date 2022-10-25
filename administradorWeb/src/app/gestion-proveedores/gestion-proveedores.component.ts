import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';
import { BotonesService } from '../services/botones.service';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-gestion-proveedores',
  templateUrl: './gestion-proveedores.component.html',
  styleUrls: ['./gestion-proveedores.component.css']
})
export class GestionProveedoresComponent extends BotonesService<Proveedor> implements OnInit {

  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los clientes disponibles a la base de datos*/
  constructor(service:ProveedorService) {
    super();
    service.getList().subscribe((data) =>{
      this.lista = data
    })
  }

  ngOnInit(): void {
  }

}
