import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-mis-puntos',
  templateUrl: './mis-puntos.component.html',
  styleUrls: ['./mis-puntos.component.css']
})
export class MisPuntosComponent implements OnInit {

  constructor(private service:CitaService, ) { }

  ngOnInit(): void {
  }

}
