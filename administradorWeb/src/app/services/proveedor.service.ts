import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api/Proveedor"
  listaProveedores!: Proveedor[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }

  /***Solicita al API todos los proveedores existentes, recibiendo como respuesta una lista de objetos 
   * Return: Proveedor[]
  */
  getAllProveedor(){
    return this.httpClient.get<Proveedor[]>(this.RUTA_API);
  }

  /***Solicita al API un Proveedor específico, recibiendo como respuesta un objeto 
   * Return: Proveedor
  */
  getProveedor(idProveedor:number) {
    return this.httpClient.get<Proveedor[]>(this.RUTA_API+"/" + idProveedor);
  }

  /***Solicita al API añadir un nuevo Proveedor, recibiendo como respuesta una lista de objetos 
   * Return: Proveedor
  */
  guardarProveedor(proveedor:Proveedor): Observable<Proveedor>{
    return this.httpClient.post<Proveedor>(this.RUTA_API,proveedor);
  }

   /***Solicita al API modificar a un Proveedor existente, recibiendo como respuesta el Proveedor modificado
   * Return: Proveedor
  */
  actualizarProveedor(proveedor:Proveedor): Observable<Proveedor>{
    return this.httpClient.put<Proveedor>(this.RUTA_API,proveedor);
  }

  /***Solicita al API eliminar a un Proveedor existente, recibiendo como respuesta el Proveedor eliminado
   * Return: Proveedor
  */
  eliminarProveedor(proveedor_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + proveedor_id);
  }

}