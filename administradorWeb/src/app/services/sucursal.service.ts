import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sucursal } from '../interfaces/sucursal';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService extends ConexionService<Sucursal>{
  getResourceURL(): string {
    return "/Sucursal"
  }
  getHomePage(): string {
    return 'gestion-sucursales'
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}