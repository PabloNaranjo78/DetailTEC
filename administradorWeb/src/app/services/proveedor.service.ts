import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api"
  listaProveedores!: Proveedor[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Lavado[]
  */
  getAllProveedor(){
    return this.httpClient.get<Proveedor[]>(this.RUTA_API +'/Proveedor');
  }
}