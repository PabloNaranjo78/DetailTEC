import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Direccion, Telefono } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   /**Ruta a conectarse con el API REST */
  RUTA_API = "https://127.0.0.1:7035/api"
  listaClientes!: Cliente[];
  /**Conexión Http */
  constructor(private httpClient:HttpClient) {
  }
  
  /***Solicita al API todos los lavados existentes, recibiendo como respuesta una lista de objetos 
   * Return: Cliente[]
  */
  getAllClientes(){
    return this.httpClient.get<Cliente[]>(this.RUTA_API +'/Cliente');
  }

  getCliente(idCliente:number) {
    return this.httpClient.get<Cliente[]>(this.RUTA_API + '/Cliente/' + idCliente);
  }

  guardarCliente(cliente:Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.RUTA_API+'/Cliente',cliente);
  }

  actualizarCliente(cliente:Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(this.RUTA_API+'/Cliente',cliente);
  }

  eliminarCliente(cliente_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/Cliente/" + cliente_id);
  }

  getTelefonos(id:number): Observable<Telefono[]>{
    return this.httpClient.get<Telefono[]>(this.RUTA_API+'/cliente-telefonos/?idCliente=' + id);
  }

  addTelefono(tel:Telefono): Observable<Telefono>{
    return this.httpClient.post<Telefono>(this.RUTA_API+'/cliente-telefonos', tel);
  }

  getDirecciones(id:number): Observable<Direccion[]>{
    return this.httpClient.get<Direccion[]>(this.RUTA_API+'/cliente-direcciones/?idCliente=' + id);
  }

  addDireccion(dir:Direccion): Observable<Direccion>{
    console.log(dir);
    return this.httpClient.post<Direccion>(this.RUTA_API+'/cliente-direcciones', dir);
  }
}
