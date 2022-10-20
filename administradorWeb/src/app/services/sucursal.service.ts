import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }
}