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
import { GestionCitasComponent } from './gestion-citas/gestion-citas.component';
import { GestionTrabajadoresComponent } from './gestion-trabajadores/gestion-trabajadores.component';
import { GestionSucursalesComponent } from './gestion-sucursales/gestion-sucursales.component';
import { GestionInsumosComponent } from './gestion-insumos/gestion-insumos.component';
import { GestionLavadosComponent } from './gestion-lavados/gestion-lavados.component';
import { GestionProveedoresComponent } from './gestion-proveedores/gestion-proveedores.component';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    NuevoClienteComponent,
    ActualizarClienteComponent,
    HeaderComponent,
    GestionCitasComponent,
    GestionTrabajadoresComponent,
    GestionSucursalesComponent,
    GestionInsumosComponent,
    GestionLavadosComponent,
    GestionProveedoresComponent,
    NuevoProveedorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"gestion-clientes", component:GestionClientesComponent},
      {path:"gestion-citas", component:GestionCitasComponent},
      {path:"gestion-lavados", component:GestionLavadosComponent},
      {path:"gestion-proveedores", component:GestionProveedoresComponent},
      {path:"gestion-sucursales", component:GestionSucursalesComponent},
      {path:"gestion-trabajadores", component:GestionTrabajadoresComponent},
      {path:"gestion-insumos", component:GestionInsumosComponent},

      {path:"nuevo-proveedor", component:NuevoProveedorComponent},
      {path:"nuevo-cliente", component:NuevoClienteComponent},
      
      {path:"actualizar-cliente/:id", component:ActualizarClienteComponent},
      {path:"actualizar-proveedor/:id", component:NuevoProveedorComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
