import { Component, OnInit } from '@angular/core';
import { ITable, PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
PdfMakeWrapper.setFonts(pdfFonts);


interface DataResponsePlanilla {
  idTrabajador:number;
  tipoPago:string;
  nombreCompleto:string;
  lavado:string;
  numCitas:number;
  costo:number;
  montoTotal:number;

}

type TableRowPlanilla = [number, string, string, string, number, number, number]


interface DataResponseLavadoCliente {
  idCliente:number;
  nombre:string;
  fechaCita:string;
  lavado:string;
  precio:number;
}

type TableRowLavadoCliente = [number, string, string, string, number]




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

  /////////////////////////////// Planilla de empleados /////////////////////////////////////////////////

  async createPlanilla(){
    //console.log('Se está creando un pdf');
    const pdf = new PdfMakeWrapper();
    const dataPlanilla = await this.fetchDataPlanilla();
    
    pdf.add('Planilla de empleados\n\n');
    pdf.add(this.createTablePlanilla(dataPlanilla));

    const CurrentDate = new Date();
    const date = CurrentDate.getDate().toString() + '/' + CurrentDate.getMonth().toString() + '/' + 
    CurrentDate.getFullYear().toString() + '-' + CurrentDate.getHours().toString() + ':' + 
    CurrentDate.getMinutes().toString() + ':' + CurrentDate.getSeconds().toString();

    pdf.create().open();
    pdf.create().download('Reporte de planilla - ' + date);
    }

  createTablePlanilla(data: DataResponsePlanilla[]): ITable{
    
    return new Table([
      ['Id Trabajador', 'Tipo de pago', 'Nombre completo', 'Tipo de lavado', 'Cantidad de citas', 'Costo', 'Monto total'],
      ...this.extractDataPlanilla(data)
    ])
    .widths([60,60,100,50,50,50,50])
    .layout({
      fillColor:(rowIndex, node, columnIndex) => {
        return rowIndex === 0 ? '#CCCCCC' : '';
     }
    })
    .end;
  }

  extractDataPlanilla(data:DataResponsePlanilla[]):TableRowPlanilla[] {
    return data.map(row=>[row.idTrabajador, row.tipoPago, row.nombreCompleto, row.lavado, row.numCitas, row.costo,row.montoTotal]);
  }

  async fetchDataPlanilla():Promise<DataResponsePlanilla[]>{
    return fetch('http://25.55.195.113:4500/api/Reportes/planilla').then(response=>response.json())
  }


  ///////////////////////////////////////////////////////// Tipo de lavado por cliente ////////////////////////////////////////


 

  async createPdfLavadoCliente(){
    //console.log('Se está creando un pdf');
    const pdf = new PdfMakeWrapper();
    const data = await this.fetchDataLavadoCliente();
    
    pdf.add('Tipo de lavado para el cliente con Id: ' + this.idCliente + '\n\n');
    pdf.add(this.createTableLavadoCliente(data));

    const CurrentDate = new Date();
    const date = CurrentDate.getDate().toString() + '/' + CurrentDate.getMonth().toString() + '/' + 
    CurrentDate.getFullYear().toString() + '-' + CurrentDate.getHours().toString() + ':' + 
    CurrentDate.getMinutes().toString() + ':' + CurrentDate.getSeconds().toString();

    pdf.create().open();
    pdf.create().download('Cliente ' + this.idCliente + ' ' + date);
    }

  createTableLavadoCliente(data: DataResponseLavadoCliente[]): ITable{
    
    
    return new Table([
      ['Id Cliente', 'Nombre', 'Fecha de la cita', 'Tipo de lavado', 'Precio'],
      ...this.extractDataLavadoCliente(data)
    ])
    .widths([60,120,90,100,50])
    .layout({
      fillColor:(rowIndex, node, columnIndex) => {
        return rowIndex === 0 ? '#CCCCCC' : '';
     }
    })
    .end;
  }

  extractDataLavadoCliente(data:DataResponseLavadoCliente[]):TableRowLavadoCliente[] {
    return data.map(row=>[row.idCliente,row.nombre,row.fechaCita,row.lavado,row.precio]);
  }


  async fetchDataLavadoCliente():Promise<DataResponseLavadoCliente[]>{
    return fetch('http://25.55.195.113:4500/api/Reportes/tipoLavado/'+this.idCliente).then(response=>response.json())
  }



}
