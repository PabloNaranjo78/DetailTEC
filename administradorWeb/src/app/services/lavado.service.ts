import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lavado } from '../interfaces/lavado';

@Injectable({
  providedIn: 'root'
})
export class LavadoService {
  /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api"
  listaLavados!: Lavado[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Lavado[]
  */
  getAllLavados(){
    return this.httpClient.get<Lavado[]>(this.RUTA_API +'/Lavado');
  }
}
