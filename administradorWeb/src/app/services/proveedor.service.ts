import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(protected override httpClient: HttpClient){
    super(httpClient)
  }

}