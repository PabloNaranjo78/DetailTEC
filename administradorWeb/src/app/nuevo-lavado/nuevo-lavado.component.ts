import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsumoRequeridos, Lavado, PersonalRequerido } from '../interfaces/lavado';
import { LavadoService } from '../services/lavado.service';

@Component({
  selector: 'app-nuevo-lavado',
  templateUrl: './nuevo-lavado.component.html',
  styleUrls: ['./nuevo-lavado.component.css']
})
export class NuevoLavadoComponent implements OnInit {
  /*Cita temporal que alberga las modificaciones en el formulario
   object: Cliente*/
  objeto:Lavado={
    nombreLav:"",
    duracion:0,
    precio:0,
    costo:0,
    puntos:0
  }
  
  editMode = true;
  /*Telefono temporal que alberga las modificaciones en el formulario
   object: Telefono*/
  productoNuevo:InsumoRequeridos={
    lavado:"",
    marcaPro:"",
    nombrePro:""
  }
  /*Direccion temporal que alberga las modificaciones en el formulario
   object: Telefono*/
   personalNuevo:PersonalRequerido={
    lavado:"",
    personal:""
  }

  /*Listas contenedoras de la data consultada en la base de datos*/
  listaLavados: Lavado[] = [];
  listaPersonal:PersonalRequerido[] = [];
  listaInsumos: InsumoRequeridos[] = [];

/*Constructor de Componente, con servicio de consulta de cliente, citas y routering 
  return void()*/
  constructor(private route:Router, private rou:ActivatedRoute, private service:LavadoService) {
    service.getList().subscribe((data) =>{
      this.listaLavados = data
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
          this.personalNuevo.lavado = this.rou.snapshot.params['id'];
          this.productoNuevo.lavado = this.rou.snapshot.params["id"];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      });
    }
    

    
  }
/*Hace un GET request de los telefonoes de un cliente especifico con su id*/
  onProducto():void{/*
    this.clienteService.getTelefonos(this.cliente.idCliente).subscribe((data) =>{
      this.listaTelefonos = data;
    })*/
  }
  
  /*Hace un GET request de las direcciones de un cliente especifico con su id*/
  onPersonal():void{/*
    this.clienteService.getDirecciones(this.cliente.idCliente).subscribe((data) =>{
      this.listaDirecciones = data;
    })*/
  }

  /*Llamada desde el botón "Añadir Telefono" envía un POST request al server */
  onAddPersonal():void{
    this.service.avisoSuccess("agregado un personal nuevo", this.objeto.nombreLav);
  }

  /*Llamada desde el botón "Añadir Direccion" envía un POST request al server */
  onAddProducto():void{
    this.service.avisoSuccess("agregado un producto nuevo", this.objeto.nombreLav);
    }
/*Llamada desde el botón "Guardar Cliente" envía un POST request al server */
  
  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombreLav)
    } else {
      this.service.onNuevo(this.objeto,this.objeto.nombreLav)
    }
  }

  onEliminar(): void{
    this.service.onEliminar(this.objeto.nombreLav) 
  }

  onCancelar(): void{ 
    this.service.onCancelar()
  }
}


