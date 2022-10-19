import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api/Sucursal"
  listaSucursales!: Sucursal[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Lavado[]
  */
  getAllSucursal(){
    return this.httpClient.get<Sucursal[]>(this.RUTA_API);
  }

  /***Solicita al API un Sucursal específico, recibiendo como respuesta un objeto 
   * Return: Sucursal
  */
   getSucursal(idSucursal:number) {
    return this.httpClient.get<Sucursal[]>(this.RUTA_API+"/" + idSucursal);
  }

  /***Solicita al API añadir un nuevo Sucursal, recibiendo como respuesta una lista de objetos 
   * Return: Sucursal
  */
  guardarSucursal(sucursal:Sucursal): Observable<Sucursal>{
    return this.httpClient.post<Sucursal>(this.RUTA_API,sucursal);
  }

   /***Solicita al API modificar a un Sucursal existente, recibiendo como respuesta el Sucursal modificado
   * Return: Sucursal
  */
  actualizarSucursal(sucursal:Sucursal): Observable<Sucursal>{
    return this.httpClient.put<Sucursal>(this.RUTA_API,sucursal);
  }

  /***Solicita al API eliminar a un Sucursal existente, recibiendo como respuesta el Sucursal eliminado
   * Return: Sucursal
  */
  eliminarSucursal(sucursal_id:string){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + sucursal_id);
  }

}