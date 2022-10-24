import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { CitaService } from './cita.service';
import { ProveedorService } from './proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService<T> {

  constructor(private httpCliente:HttpClient){
  }
  
  getServicio(tipo:string){
    switch (tipo){
      case "proveedor":
        return 0;
    }
    return new ServicioAPIService(this.httpCliente);
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
