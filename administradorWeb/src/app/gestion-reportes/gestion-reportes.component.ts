import { Component, OnInit } from '@angular/core';
import { ITable, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CitaService } from '../services/cita.service';
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



interface DataResponseRedencionPuntos {
  idTrabajador:number;
  tipoPago:string;
  nombreCompleto:string;
  lavado:string;
  numCitas:number;
  costo:number;
  montoTotal:number;

}

type TableRowRedencionPuntos = [number, string, string, string, number, number, number]



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
    
    pdf.add(new Txt('Planilla de empleados\n').alignment('center').fontSize(30).bold().end);
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
    return fetch('https://localhost:7035/api/Reportes/planilla').then(response=>response.json())
    //return fetch('http://25.55.195.113:4500/api/Reportes/planilla').then(response=>response.json())
  }


  ///////////////////////////////////////////////////////// Tipo de lavado por cliente ////////////////////////////////////////

  async createPdfLavadoCliente(){
    //console.log('Se está creando un pdf');
    const pdf = new PdfMakeWrapper();
    const data = await this.fetchDataLavadoCliente();
    
    pdf.add(new Txt('Tipo de lavado para el cliente con Id: ' + this.idCliente + '\n\n').alignment('center').fontSize(30).bold().end);
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
    return fetch('https://localhost:7035/api/Reportes/tipoLavado/'+this.idCliente).then(response=>response.json())
    //return fetch('http://25.55.195.113:4500/api/Reportes/tipoLavado/'+this.idCliente).then(response=>response.json())
  }


  //////////////////////////////////////// Redención de puntos ///////////////////////////////////////////

  async createRedencionPuntos(){
    //console.log('Se está creando un pdf');
    const pdf = new PdfMakeWrapper();
    const dataRedencionPuntos = await this.fetchDataRedencionPuntos();
    
    pdf.add(new Txt('Redención de puntos\n').alignment('center').fontSize(40).bold().end);
    pdf.add(this.createTableRedencionPuntos(dataRedencionPuntos));

    const CurrentDate = new Date();
    const date = CurrentDate.getDate().toString() + '/' + CurrentDate.getMonth().toString() + '/' + 
                  CurrentDate.getFullYear().toString() + '-' + CurrentDate.getHours().toString() + ':' + 
                  CurrentDate.getMinutes().toString() + ':' + CurrentDate.getSeconds().toString();

    pdf.create().open();
    pdf.create().download('Redención de puntos - ' + date);
    }

  createTableRedencionPuntos(data: DataResponseRedencionPuntos[]): ITable{
    
    return new Table([
      ['Id Trabajador', 'Tipo de pago', 'Nombre completo', 'Tipo de lavado', 'Cantidad de citas', 'Costo', 'Monto total'],
      ...this.extractDataRedencionPuntos(data)
    ])
    .widths([60,60,100,50,50,50,50])
    .layout({
      fillColor:(rowIndex, node, columnIndex) => {
        return rowIndex === 0 ? '#CCCCCC' : '';
     }
    })
    .end;
  }

  extractDataRedencionPuntos(data:DataResponseRedencionPuntos[]):TableRowRedencionPuntos[] {
    return data.map(row=>[row.idTrabajador, row.tipoPago, row.nombreCompleto, row.lavado, row.numCitas, row.costo,row.montoTotal]);
  }

  async fetchDataRedencionPuntos():Promise<DataResponseRedencionPuntos[]>{
    return fetch('https://localhost:7035/api/Reportes/planilla').then(response=>response.json())
    //return fetch('http://25.55.195.113:4500/api/Reportes/planilla').then(response=>response.json())
  }

  ////////////////////////////////////////////// Factura ////////////////////////////////////////////////
  
  generarFactura(){
    const pdf = new PdfMakeWrapper();

    
    pdf.add(new Txt('DetailTEC\n').alignment('center').fontSize(40).bold().end);

    pdf.add(new Txt('Factura: FACTURA').fontSize(15).end);
    pdf.add(new Txt('Cliente: NOMBRE').fontSize(15).end);
    pdf.add(new Txt('Sucursal: SUCURSAL').fontSize(15).end);
    pdf.add(new Txt('Trabajador a cargo: NOMBRE').fontSize(15).end);
    pdf.add(new Txt('Fecha: FECHA').fontSize(15).end);
    pdf.add(new Txt('Placa: PLACA').fontSize(15).end);
    pdf.add(new Txt('\n').fontSize(15).end);

    pdf.add(new Txt('Insumos\n').fontSize(15).end);
    pdf.add(new Txt('Bebidas\n').fontSize(15).end);
    pdf.add(new Txt('Snacks\n').fontSize(15).end);
    pdf.add(new Txt('Total').fontSize(15).end);




    pdf.create().open();
  }

}
