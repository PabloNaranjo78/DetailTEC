import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  valido:boolean = false;
  constructor(protected httpClient:HttpClient, protected route:Router) { }

  enviarDatos(id:number, contra:string){
    console.log("http://25.55.195.113:4500/api/Login/cliente/"+id+"/"+contra)
    this.httpClient.get<boolean>("http://25.55.195.113:4500/api/Login/cliente/"+id+"/"+contra).subscribe((data)=> this.valido = data);
    return this.valido
  }

}
