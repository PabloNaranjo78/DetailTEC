import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }
}