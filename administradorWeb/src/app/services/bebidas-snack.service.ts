import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BebidasSnack, BebidasSnackFactura } from '../interfaces/bebidas-snack';
import { PersonalRequerido } from '../interfaces/lavado';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class BebidasSnackService extends ConexionService<BebidasSnack>{
  getResourceURL(): string {
    return "/PersonalRequerido"
  }
  getHomePage(): string {
    return 'actualizar-lavado'
  }
  getNombre(): string {
    return "Personal Requerido"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}


@Injectable({
  providedIn: 'root'
})
export class BebidasSnackFacturaService extends ConexionService<BebidasSnackFactura>{
  idFactura:number = 0
  getResourceURL(): string {
    return "/PersonalRequerido"
  }
  getHomePage(): string {

    return 'actualizar-lavado' + this.idFactura
  }
  getNombre(): string {
    return "Personal Requerido"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}
