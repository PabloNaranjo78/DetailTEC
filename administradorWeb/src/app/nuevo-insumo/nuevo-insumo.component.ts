import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insumo } from '../interfaces/insumo';
import { InsumoService } from '../services/insumo.service';

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

  editMode = true;

  constructor(private service:InsumoService, private route:Router, private rou:ActivatedRoute) { }

  onGuardar(): void{
    if (this.editMode){
      this.service.onActualizar(this.objeto,this.objeto.nombrePro)
    } else {
      this.service.onNuevo(this.objeto,this.objeto.nombrePro)
    }
  }

  onProveedores(){
    this.service.addProveedor().subscribe({next: (data) =>console.log(data) });
  }

  onEliminar(): void{ 
    this.service.onEliminar(this.objeto.marcaPro,this.objeto.nombrePro)
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