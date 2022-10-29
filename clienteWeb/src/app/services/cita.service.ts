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
  id:number=0;
  getNombre(): string {
    return "Cita"
  }
  getResourceURL(): string {
    return "/Cita";
  }
  getHomePage(): string {
    console.log(this.id)
    return 'gestion-citas/' + this.id
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}