import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insumo, ProveidoPor } from '../interfaces/insumo';
import { Proveedor } from '../interfaces/proveedor';
import { InsumoService, ProveidoService } from '../services/insumo.service';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-nuevo-insumo',
  templateUrl: './nuevo-insumo.component.html',
  styleUrls: ['./nuevo-insumo.component.css']
})
export class NuevoInsumoComponent implements OnInit {
  /**Insumo temporal para enviar a ser verificado
   * input: Insumo Interface
   */
  objeto:Insumo={
    nombrePro:"",
    marcaPro:"",
    costo:0,
  }
  proveedorNuevo:ProveidoPor={
    nombrePro:"",
    marcaPro:"",
    proveedor:0,
  }

  listaProveedores: Proveedor[] =[]
  listaProveidoPor: ProveidoPor[] = []

  editMode = true;

  constructor(private service:InsumoService, private provService:ProveidoService, private proveedorService:ProveedorService, private route:Router, private rou:ActivatedRoute) { }

  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombrePro)
    } else {
      this.service.onNuevo(this.objeto,this.objeto.nombrePro)
    }
  }

  onProveedores(){
    this.provService.get(this.objeto.nombrePro).subscribe((data) => {this.listaProveidoPor = data;})
    this.proveedorService.getList().subscribe((data) => {this.listaProveedores = data;})
    this.provService.id = this.objeto.marcaPro + "/" + this.objeto.nombrePro
    this.proveedorNuevo.marcaPro = this.objeto.marcaPro
    this.proveedorNuevo.nombrePro = this.objeto.nombrePro
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.marcaPro,this.objeto.nombrePro)
  }

  
  onCancelar(): void{ 
    this.service.onCancelar()
  }

  onAddProveedor(){
    console.log(this.proveedorNuevo);
    this.provService.onNuevo(this.proveedorNuevo, this.proveedorNuevo.proveedor);
  }

  onDeleteProveedor(pro: ProveidoPor){
    this.provService.onEliminar(this.proveedorNuevo.nombrePro, this.proveedorNuevo.marcaPro + "/" + this.proveedorNuevo.proveedor);
  }

  ngOnInit(): void {
    if(this.rou.snapshot.params['marca']==undefined){
      this.editMode = false;
    } else {
      this.service.get(this.rou.snapshot.params['marca'],this.rou.snapshot.params['nombre']).subscribe({
        /*Mensaje emergente de exito*/
        next: (data) => {
          this.objeto = data[0];
        },
        /*Mensaje emergente de error*/
        error: (err) =>{
          this.service.avisoError(err.error)}
      });
    }
  }
}