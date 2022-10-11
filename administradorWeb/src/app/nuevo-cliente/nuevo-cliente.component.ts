import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente, Direccion, Telefono } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  /*Cita temporal que alberga las modificaciones en el formulario
   object: Cliente*/
  cliente:Cliente={
    idCliente:0,
    usuario:"",
    contraseña:"1234",
    infoContacto:"",
    nombre:"",
    email:""
  }
  /*Telefono temporal que alberga las modificaciones en el formulario
   object: Telefono*/
  telefonoNuevo:Telefono={
    idCliente:0,
    telefono:0
  }
  /*Direccion temporal que alberga las modificaciones en el formulario
   object: Telefono*/
  direccionNueva:Direccion={
    idCliente:0,
    provincia:"",
    canton:"",
    distrito:""
  }

  /*Listas contenedoras de la data consultada en la base de datos*/
  listaClientes: Cliente[] = [];
  listaTelefonos:Telefono[] = [];
  listaDirecciones: Direccion[] = [];

/*Constructor de Componente, con servicio de consulta de cliente, citas y routering 
  return void()*/
  constructor(private route:Router, private clienteService:ClienteService) {
    clienteService.getAllClientes().subscribe((data) =>{
      this.listaClientes = data
    })
  }

  ngOnInit(): void {
  }
/*Hace un GET request de los telefonoes de un cliente especifico con su id*/
  onTelefonos():void{/*
    this.clienteService.getTelefonos(this.cliente.idCliente).subscribe((data) =>{
      this.listaTelefonos = data;
    })*/
  }
  
  /*Hace un GET request de las direcciones de un cliente especifico con su id*/
  onDirecciones():void{/*
    this.clienteService.getDirecciones(this.cliente.idCliente).subscribe((data) =>{
      this.listaDirecciones = data;
    })*/
  }

  /*Llamada desde el botón "Añadir Telefono" envía un POST request al server */
  onAddTelefono():void{
    Swal.fire({
      icon: 'success',
      title: '¡Has agregado una nuevo Teléfono a ' + this.cliente.nombre})
  }

  /*Llamada desde el botón "Añadir Direccion" envía un POST request al server */
  onAddDireccion():void{
    Swal.fire({
      icon: 'success',
      title: '¡Has agregado una nueva Dirección a ' + this.cliente.nombre})
  }
/*Llamada desde el botón "Guardar Cliente" envía un POST request al server */
  
  onSubmit(): void{
    this.clienteService.guardarCliente(this.cliente).subscribe({
      /*Mensaje emergente de exito*/
      
      next: (data) => {
        Swal.fire({
        icon: 'success',
        title: '¡Has agregado a ' + this.cliente.nombre + ' como Cliente'})
      this.route.navigate(['clientes'])},
      /*Mensaje emergente de error*/
      error: (err) =>{
        Swal.fire({
        icon: 'error',
        title: '¡Algo ha salido mal!',
        text: err.error})}
    })
  }
}

