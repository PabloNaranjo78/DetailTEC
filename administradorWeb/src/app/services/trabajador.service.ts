import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from '../interfaces/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api"
  listaTrabajadores!: Trabajador[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Lavado[]
  */
  getAllSucursal(){
    return this.httpClient.get<Trabajador[]>(this.RUTA_API +'/Trabajador');
  }
}