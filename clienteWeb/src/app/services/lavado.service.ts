import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lavado, PersonalRequerido, ProductoRequerido} from '../interfaces/lavado';
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


@Injectable({
  providedIn: 'root'
})
export class ProductosService extends ConexionService<ProductoRequerido>{
  id:string = ""
  getResourceURL(): string {
    return "/ProductosUsados"
  }
  getHomePage(): string {
    return 'actualizar-lavado' + this.id
  }
  getNombre(): string {
    return "Producto"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService extends ConexionService<PersonalRequerido>{
  id:string = ""
  getResourceURL(): string {
    return "/PersonalRequerido"
  }
  getHomePage(): string {
    return 'actualizar-lavado' + this.id
  }
  getNombre(): string {
    return "Personal Requerido"
  }
  constructor(protected override httpClient: HttpClient, protected override route:Router){
    super(httpClient, route)
  }
}
