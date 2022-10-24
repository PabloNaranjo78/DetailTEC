import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
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
import { NuevaSucursalComponent } from './nueva-sucursal/nueva-sucursal.component';
import { NuevoInsumoComponent } from './nuevo-insumo/nuevo-insumo.component';
import { NuevoLavadoComponent } from './nuevo-lavado/nuevo-lavado.component';
import { NuevaCitaComponent } from './nueva-cita/nueva-cita.component';
import { NuevoTrabajadorComponent } from './nuevo-trabajador/nuevo-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    NuevoClienteComponent,
    HeaderComponent,
    GestionCitasComponent,
    GestionTrabajadoresComponent,
    GestionSucursalesComponent,
    GestionInsumosComponent,
    GestionLavadosComponent,
    GestionProveedoresComponent,
    NuevoProveedorComponent,
    NuevaSucursalComponent,
    NuevoInsumoComponent,
    NuevoLavadoComponent,
    NuevoTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"", component:GestionClientesComponent},
      {path:"gestion-clientes", component:GestionClientesComponent},
      {path:"gestion-proveedores", component:GestionProveedoresComponent},
      {path:"gestion-citas", component:GestionCitasComponent},
      {path:"gestion-lavados", component:GestionLavadosComponent},
      {path:"gestion-sucursales", component:GestionSucursalesComponent},
      {path:"gestion-trabajadores", component:GestionTrabajadoresComponent},
      {path:"gestion-insumos", component:GestionInsumosComponent},

      {path:"nuevo-cliente", component:NuevoClienteComponent},
      {path:"nuevo-proveedor", component:NuevoProveedorComponent},
      {path:"nueva-cita", component:NuevaCitaComponent},
      {path:"nuevo-lavado", component:NuevoLavadoComponent},
      {path:"nueva-sucursal", component:NuevaSucursalComponent},
      {path:"nuevo-trabajador", component:NuevoTrabajadorComponent},
      {path:"nuevo-insumo", component:NuevoInsumoComponent},
      
      
      {path:"actualizar-cliente/:id", component:NuevoClienteComponent},
      {path:"actualizar-proveedor/:id", component:NuevoProveedorComponent},
      {path:"actualizar-cita/:id", component:NuevaCitaComponent},
      {path:"actualizar-lavado/:id", component:NuevoLavadoComponent},
      {path:"actualizar-sucursal/:id", component:NuevaSucursalComponent},
      {path:"actualizar-trabajador/:id", component:NuevoTrabajadorComponent},
      {path:"actualizar-insumo/:marca/:nombre", component:NuevoInsumoComponent},
      
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
