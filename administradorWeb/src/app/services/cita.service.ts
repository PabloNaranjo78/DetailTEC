import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/cita';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class CitaService extends ConexionService<Cita>{
  getResourceURL(): string {
    return "/Cita"
  }
  getHomePage(): string {
    return 'gestion-citas'
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}