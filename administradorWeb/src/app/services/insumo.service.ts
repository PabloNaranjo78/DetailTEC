import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Insumo, ProveidoPor } from '../interfaces/insumo';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class InsumoService extends ConexionService<Insumo>{
  getHomePage(): string {
    return 'gestion-insumos'
  }
  getResourceURL(): string {
    return "/Insumo"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
  getNombre(): string {
    return "Insumo"
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProveidoService extends ConexionService<ProveidoPor>{
  id:string|number="";
  getResourceURL(): string {
    return "/ProveidoPor"
  }
  getHomePage(): string {
    return 'actualizar-insumo/' + this.id;
  }
  getNombre(): string {
    return "Proveedor de Insumo"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}