import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  

  /***Solicita al API un Trabajador específico, recibiendo como respuesta un objeto 
   * Return: Trabajador
  */
   getTrabajador(idTrabajador:number) {
    return this.httpClient.get<Trabajador[]>(this.RUTA_API+"/" + idTrabajador);
  }

  /***Solicita al API añadir un nuevo Trabajador, recibiendo como respuesta una lista de objetos 
   * Return: Trabajador
  */
  guardarTrabajador(trabajador:Trabajador): Observable<Trabajador>{
    return this.httpClient.post<Trabajador>(this.RUTA_API,trabajador);
  }

   /***Solicita al API modificar a un Trabajador existente, recibiendo como respuesta el Trabajador modificado
   * Return: Trabajador
  */
  actualizarTrabajador(trabajador:Trabajador): Observable<Trabajador>{
    return this.httpClient.put<Trabajador>(this.RUTA_API,trabajador);
  }

  /***Solicita al API eliminar a un Trabajador existente, recibiendo como respuesta el Trabajador eliminado
   * Return: Trabajador
  */
  eliminarTrabajador(trabajador_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + trabajador_id);
  }

}