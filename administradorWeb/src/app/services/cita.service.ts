import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

 

  /***Solicita al API un Cita específico, recibiendo como respuesta un objeto 
   * Return: Cita
  */
   getCita(idCita:number) {
    return this.httpClient.get<Cita[]>(this.RUTA_API+"/" + idCita);
  }

  /***Solicita al API añadir un nuevo Cita, recibiendo como respuesta una lista de objetos 
   * Return: Cita
  */
  guardarCita(cita:Cita): Observable<Cita>{
    return this.httpClient.post<Cita>(this.RUTA_API,cita);
  }

   /***Solicita al API modificar a un Cita existente, recibiendo como respuesta el Cita modificado
   * Return: Cita
  */
  actualizarCita(cita:Cita): Observable<Cita>{
    return this.httpClient.put<Cita>(this.RUTA_API,cita);
  }

  /***Solicita al API eliminar a un Cita existente, recibiendo como respuesta el Cita eliminado
   * Return: Cita
  */
  eliminarCita(cita_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + cita_id);
  }

}
