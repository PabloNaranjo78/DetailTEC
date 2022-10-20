import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable} from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export abstract class ConexionService<T> {

  /**Ruta a conectarse con el API REST */
 private readonly RUTA_API = "https://127.0.0.1:7035/api" + this.getResourceURL();
 constructor(protected httpClient:HttpClient) {
 }

 getRuta(){
  return this.RUTA_API;
 }

 abstract getResourceURL(): string;
  getList(){
    console.log(this.RUTA_API);
    return this.httpClient.get<T[]>(this.RUTA_API);
  }

  get(id: string | number, marca?:string | number){
    if (marca){
      return this.httpClient.get<T[]>(this.RUTA_API+"/"+id+ "/"+ marca);
    }
    return this.httpClient.get<T[]>(this.RUTA_API+"/"+id);
  }

  add(resurce:T): Observable<T>{
    return this.httpClient.post<T>(this.RUTA_API,resurce);
  }

  update(resource:T): Observable<T> {
    return this.httpClient.put<T>(this.RUTA_API,resource);
  }

  delete(id: string | number, marca?:string | number){
    if (marca){
      return this.httpClient.delete<T[]>(this.RUTA_API+"/"+id+ "/"+ marca);
    }
    return this.httpClient.delete<T[]>(this.RUTA_API+"/"+id);
  }

  avisoError(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: '¡Algo ha salido mal!',
      text: mensaje
    })
  }    

  avisoSuccess(tipo:string, id:string){
    Swal.fire({
      icon: 'success',
      title: '¡Has ' + tipo + ' a '+ id +' exitosamente!'
    })
  }    
}


