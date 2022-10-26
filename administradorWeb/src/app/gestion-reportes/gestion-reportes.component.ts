import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-gestion-reportes',
  templateUrl: './gestion-reportes.component.html',
  styleUrls: ['./gestion-reportes.component.css']
})
export class GestionReportesComponent implements OnInit {
  idCliente: number = 0;
  listaClientes:Cliente[] = []

  constructor(private service:ClienteService) { }

  ngOnInit(): void {
    this.service.getList().subscribe({
      next: (data) => {
        this.listaClientes = data
      }, 
      error: (err) => {
        this.service.avisoError(err)
      }
    })
  }

  onPlanilla(){
    console.log("Planilla")
  }

  onLavadoCliente(){
    console.log(this.idCliente)
  }

  onPuntos(){
    console.log("Puntos")
  }

}
