import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  

  /***Solicita al API un Lavado específico, recibiendo como respuesta un objeto 
   * Return: Lavado
  */
   getLavado(idLavado:number) {
    return this.httpClient.get<Lavado[]>(this.RUTA_API+"/" + idLavado);
  }

  /***Solicita al API añadir un nuevo Lavado, recibiendo como respuesta una lista de objetos 
   * Return: Lavado
  */
  guardarLavado(lavado:Lavado): Observable<Lavado>{
    return this.httpClient.post<Lavado>(this.RUTA_API,lavado);
  }

   /***Solicita al API modificar a un Lavado existente, recibiendo como respuesta el Lavado modificado
   * Return: Lavado
  */
  actualizarLavado(lavado:Lavado): Observable<Lavado>{
    return this.httpClient.put<Lavado>(this.RUTA_API,lavado);
  }

  /***Solicita al API eliminar a un Lavado existente, recibiendo como respuesta el Lavado eliminado
   * Return: Lavado
  */
  eliminarLavado(lavado_id:number){
    return this.httpClient.delete<string>(this.RUTA_API+"/" + lavado_id);
  }

}
