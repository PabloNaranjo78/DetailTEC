import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Insumo } from '../interfaces/insumo';
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

  addProveedor(){
    console.log(this.getRuta() + "/aaa/aaa");
    return this.httpClient.get<Insumo[]>(this.getRuta() + "/aaa/aaa");

  }
}
