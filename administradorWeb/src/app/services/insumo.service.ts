import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  

  /***Solicita al API un Insumo específico, recibiendo como respuesta un objeto 
   * Return: Insumo
  */
   getInsumo(idInsumo:number) {
    return this.httpClient.get<Insumo[]>(this.RUTA_API+"/" + idInsumo);
  }

  /***Solicita al API añadir un nuevo Insumo, recibiendo como respuesta una lista de objetos 
   * Return: Insumo
  */
  guardarInsumo(insumo:Insumo): Observable<Insumo>{
    return this.httpClient.post<Insumo>(this.RUTA_API,insumo);
  }

   /***Solicita al API modificar a un Insumo existente, recibiendo como respuesta el Insumo modificado
   * Return: Insumo
  */
  actualizarInsumo(insumo:Insumo): Observable<Insumo>{
    return this.httpClient.put<Insumo>(this.RUTA_API,insumo);
  }

  /***Solicita al API eliminar a un Insumo existente, recibiendo como respuesta el Insumo eliminado
   * Return: Insumo
  */
  eliminarInsumo(insumo_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + insumo_id);
  }

}
