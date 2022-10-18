import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insumo } from '../interfaces/insumo';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
   /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api"
  listaInsumos!: Insumo[];
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Cliente[]
  */
  getAllInsumos(){
    return this.httpClient.get<Insumo[]>(this.RUTA_API +'/Insumo');
  }
}
