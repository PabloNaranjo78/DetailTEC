import { Component, OnInit } from '@angular/core';
import { ITable, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Cita } from '../interfaces/cita';
import { CitaService } from '../services/cita.service';
PdfMakeWrapper.setFonts(pdfFonts);




@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.css']
})
export class FacturarComponent implements OnInit {

  objeto: Cita = {
    placa:999999,
    fechaCita:"28_10_2022",
    idEmpleado:0,
    sucursal:"Cartago",
    lavado:"Lavado Encerado",
    idCliente:1234,
  }

  constructor(private service:CitaService) { }

  ngOnInit(): void {}

    ////////////////////////////////////////////// Factura ////////////////////////////////////////////////
  
    generarFactura(){
      const pdf = new PdfMakeWrapper();
  
      
      pdf.add(new Txt('DetailTEC\n').alignment('center').fontSize(40).bold().end);
      
      pdf.add(new Txt('Factura: ' + this.objeto.idCliente.toString() + '_' + this.objeto.fechaCita.toString()).fontSize(15).end);
      pdf.add(new Txt('Cliente: ' + this.objeto.idCliente.toString()).fontSize(15).end);
      pdf.add(new Txt('Sucursal: ' + this.objeto.sucursal.toString()).fontSize(15).end);
      pdf.add(new Txt('Trabajador a cargo: ' + this.objeto.idEmpleado.toString()).fontSize(15).end);
      pdf.add(new Txt('Fecha: ' + this.objeto.fechaCita.toString()).fontSize(15).end);
      pdf.add(new Txt('Placa: ' + this.objeto.placa.toString()).fontSize(15).end);
      pdf.add(new Txt('\n').fontSize(15).end);
  
      pdf.add(new Txt('Insumos\n').fontSize(15).end);
      pdf.add(new Txt('Bebidas\n').fontSize(15).end);
      pdf.add(new Txt('Snacks\n').fontSize(15).end);
      pdf.add(new Txt('Total').fontSize(15).end);
  
  
  
  
      pdf.create().open();
    }
  

}
