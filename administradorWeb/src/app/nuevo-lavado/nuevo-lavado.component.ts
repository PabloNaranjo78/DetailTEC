import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insumo } from '../interfaces/insumo';
import { ProductoRequerido, Lavado, PersonalRequerido } from '../interfaces/lavado';
import { Trabajador } from '../interfaces/trabajador';
import { InsumoService } from '../services/insumo.service';
import { LavadoService, PersonalService, ProductosService } from '../services/lavado.service';
import { TrabajadorService } from '../services/trabajador.service';

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
  productoNuevo:ProductoRequerido={
    lavado:"",
    marcaPro:"",
    nombrePro:""
  }

  /*Direccion temporal que alberga las modificaciones en el formulario
   object: Telefono*/
  personalNuevo:PersonalRequerido={
    lavado:"",
    personal:0
  }

  /*Listas contenedoras de la data consultada en la base de datos*/
  listaLavados: Lavado[] = [];
  listaPersonal:PersonalRequerido[] = [];
  listaProductos: ProductoRequerido[] = [];
  
  listaTrabajadores:Trabajador[] = [];
  listaInsumos: Insumo[] = [];

/*Constructor de Componente, con servicio de consulta de cliente, citas y routering 
  return void()*/
  constructor(private route:Router, private rou:ActivatedRoute, private service:LavadoService, private serviceIns:InsumoService, private serviceTrab:TrabajadorService, private servicePers:PersonalService, private serviceProd:ProductosService) {
    service.getList().subscribe((data) =>{
      this.listaLavados = data
    })
  }

  onSelectedProducto(pro:Insumo){
    this.productoNuevo.marcaPro = pro.marcaPro
    this.productoNuevo.nombrePro = pro.nombrePro
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
  onProducto():void{
    this.serviceProd.get(this.objeto.nombreLav).subscribe((data) => {console.log(data); this.listaProductos = data;})
    this.serviceIns.getList().subscribe((data) => {this.listaInsumos = data;})
    this.serviceProd.id = this.objeto.nombreLav
    this.productoNuevo.lavado = this.objeto.nombreLav
  }

  temp:Insumo = {
    nombrePro:"",
    marcaPro:"",
    costo:0,
  }

  /*Llamada desde el botón "Añadir Direccion" envía un POST request al server */
  onAddProducto():void{
    console.log(this.temp)
  }
  
  onDeleteProducto(pro:ProductoRequerido){
    this.serviceProd.onEliminar(pro.nombrePro + "/" + pro.marcaPro, pro.lavado);
  }
  
  /*Hace un GET request de las direcciones de un cliente especifico con su id*/
  onPersonal():void{
   this.servicePers.get(this.objeto.nombreLav).subscribe((data) => {console.log(data); this.listaPersonal = data;})
    this.serviceTrab.getList().subscribe((data) => {this.listaTrabajadores= data;})
    this.servicePers.id = this.objeto.nombreLav
    this.personalNuevo.lavado = this.objeto.nombreLav
  }

  /*Llamada desde el botón "Añadir Telefono" envía un POST request al server */
  onAddPersonal():void{
    this.servicePers.onNuevo(this.personalNuevo, this.personalNuevo.personal);
  }
  
  /*Llamada desde el botón "Añadir Telefono" envía un POST request al server */
  onDeletePersonal(per:PersonalRequerido):void{
    this.servicePers.onEliminar(per.personal, per.lavado);
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


