import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  /**Ruta a conectarse con el API REST */
 RUTA_API = "https://127.0.0.1:7035/api"
 listaClientes!: Cita[];
 /**Conexión Http */
 constructor(private httpClient:HttpClient) {
 }
 
 /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
  * Return: Cita[]
 */
 getAllCitas(){
   return this.httpClient.get<Cita[]>(this.RUTA_API +'/Cita');
 }
}
