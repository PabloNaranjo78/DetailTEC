import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }
}
