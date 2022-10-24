import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends ConexionService<Proveedor>{
  getResourceURL(): string {
    return "/Proveedor"
  }
  getHomePage(): string {
    return 'gestion-proveedores'
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }

}