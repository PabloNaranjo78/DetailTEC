import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }
}
