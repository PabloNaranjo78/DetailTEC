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
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { VigilanteGuard } from './vigilante.guard';

@NgModule({
  declarations: [
    AppComponent,
    NuevaCitComponent,
    GestionCitasComponent,
    NuevoClienteComponent,
    HeaderComponent,
    MisPuntosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"", component:LoginComponent},
      {path:"gestion-citas/:id", component:GestionCitasComponent, canActivate: [VigilanteGuard]},
      {path:"nueva-cita/:id", component:NuevaCitComponent, canActivate: [VigilanteGuard]},
      {path:"actualizar-cita/:id/:placa", component:NuevaCitComponent, canActivate: [VigilanteGuard]},
      {path:"gestionar-perfil/:id", component:NuevoClienteComponent, canActivate: [VigilanteGuard]},
      {path:"mis-puntos/:id", component:MisPuntosComponent, canActivate: [VigilanteGuard]},
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
