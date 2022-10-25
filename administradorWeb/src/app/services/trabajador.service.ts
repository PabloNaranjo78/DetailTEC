import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trabajador } from '../interfaces/trabajador';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService extends ConexionService<Trabajador>{
  getResourceURL(): string {
    return "/Trabajador"
  }
  getHomePage(): string {
    return 'gestion-trabajadores'
  }
  getNombre(): string {
    return "Trabajador"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}