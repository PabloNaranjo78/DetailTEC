import { Component, OnInit } from '@angular/core';
import { Insumo } from '../interfaces/insumo';
import { BotonesService } from '../services/botones.service';
import { InsumoService} from '../services/insumo.service';

@Component({
  selector: 'app-gestion-insumos',
  templateUrl: './gestion-insumos.component.html',
  styleUrls: ['./gestion-insumos.component.css']
})
export class GestionInsumosComponent extends BotonesService<Insumo> implements OnInit {
  
  
  /*Constructor de la clase, servicio de citas inyectado 
  Consulta todas los insumos disponibles a la base de datos*/
  constructor(service:InsumoService) {
    super();
    service.getList().subscribe((data) => {
      this.lista = data;
    }) 
  }

  ngOnInit(): void {
  }

}
