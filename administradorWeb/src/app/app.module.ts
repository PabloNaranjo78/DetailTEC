import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    NuevoClienteComponent,
    ActualizarClienteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"", component:GestionClientesComponent},
      {path:"gestion-clientes", component:GestionClientesComponent},
      {path:"nuevo-cliente", component:NuevoClienteComponent},
      {path:"actualizar-cliente/:id", component:ActualizarClienteComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
