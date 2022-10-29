import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GestionCitasComponent } from './gestion-citas/gestion-citas.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';


import { AppComponent } from './app.component';
import { NuevaCitComponent } from './nueva-cit/nueva-cit.component';
import { HeaderComponent } from './header/header.component';
import { MisPuntosComponent } from './mis-puntos/mis-puntos.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaCitComponent,
    GestionCitasComponent,
    NuevoClienteComponent,
    HeaderComponent,
    MisPuntosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:":id/gestion-citas", component:GestionCitasComponent},
      {path:":id/nueva-cita", component:NuevaCitComponent},
      {path:":id/actualizar-cita/:placa", component:NuevaCitComponent},
      {path:":id/gestionar-perfil", component:NuevoClienteComponent},
      {path:":id/mis-puntos", component:MisPuntosComponent},
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
