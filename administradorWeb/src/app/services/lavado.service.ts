import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lavado } from '../interfaces/lavado';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class LavadoService extends ConexionService<Lavado>{
  getResourceURL(): string {
    return "/Lavado"
  }
  getHomePage(): string {
    return 'gestion-lavados'
  }
  getNombre(): string {
    return "Lavado"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}
