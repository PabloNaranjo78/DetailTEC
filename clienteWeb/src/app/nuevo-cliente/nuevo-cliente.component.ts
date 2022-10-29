import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cliente, Direccion, Telefono } from '../interfaces/cliente';
import { ClienteService, DireccionService, TelefonoService } from '../services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})

export class NuevoClienteComponent implements OnInit {
  /*Cita temporal que alberga las modificaciones en el formulario
   object: Cliente*/
  objeto:Cliente={
    idCliente:0,
    usuario:"",
    contraseña:"1234",
    infoContacto:"",
    nombre:"",
    email:""
  }
  
  editMode = true;
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
  constructor(private route:Router, private rou:ActivatedRoute, private service:ClienteService, private telService:TelefonoService, private dirService:DireccionService) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    service.getList().subscribe((data) =>{
      this.listaClientes = data
    })
  }

  ngOnInit(): void {
    if(this.rou.snapshot.params['id']==undefined){
      this.editMode = false;
    } else {
      this.service.get(this.rou.snapshot.params['id']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.objeto = data[0];
          this.direccionNueva.idCliente = this.rou.snapshot.params['id'];
          this.telefonoNuevo.idCliente = this.rou.snapshot.params["id"];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      });
    }
    

    
  }
/*Hace un GET request de los telefonoes de un cliente especifico con su id*/
  onTelefonos():void{
    this.telService.get(this.objeto.idCliente).subscribe((data) =>{
      this.listaTelefonos = data;
    })
    this.telService.id = this.objeto.idCliente
  }
  
  /*Hace un GET request de las direcciones de un cliente especifico con su id*/
  onDirecciones():void{
    this.dirService.get(this.objeto.idCliente).subscribe((data) =>{
      this.listaDirecciones = data;
    })
    this.dirService.id = this.objeto.idCliente
  }

  /*Llamada desde el botón "Añadir Telefono" envía un POST request al server */
  onAddTelefono():void{
    this.telService.onNuevo(this.telefonoNuevo,this.telefonoNuevo.telefono)
  }

  onDeleteTelefono(tel:Telefono):void{
    this.telService.onEliminar(tel.idCliente,tel.telefono)
  }

  onDeleteDireccion(dir:Direccion):void{
    this.dirService.onEliminar(dir.idCliente,
      dir.provincia + "/" + dir.canton + "/" + dir.distrito)
  }

  /*Llamada desde el botón "Añadir Direccion" envía un POST request al server */
  onAddDireccion():void{
    this.dirService.onNuevo(this.direccionNueva,this.direccionNueva.provincia)
  }
/*Llamada desde el botón "Guardar Cliente" envía un POST request al server */
  
  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombre)
    }  else {
      this.service.onNuevo(this.objeto,this.objeto.nombre)
  
    }
    
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.idCliente)
  }

  onCancelar(): void{ 
    this.service.onCancelar()
    }
}



