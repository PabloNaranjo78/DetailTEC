import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente, Direccion, Telefono } from '../interfaces/cliente';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ConexionService<Cliente>{
  getResourceURL(): string {
    return "/Cliente"
  }
  getHomePage(): string {
    return 'gestion-clientes'
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelefonoService extends ConexionService<Telefono>{

  id:string|number="";
  getResourceURL(): string {
    return "/ClienteTelefonos"
  }
  getHomePage(): string {
    return 'actualizar-cliente/' + this.id;
  }

}
