import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }
}
