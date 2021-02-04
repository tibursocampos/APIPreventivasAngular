import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CronogramaDetalhadoComponent } from './cronograma-detalhado/cronograma-detalhado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CriarUsuariosComponent } from './criar-usuarios/criar-usuarios.component';
import { CronogramasComponent } from './cronogramas/cronogramas.component';
import { CriarCronogramasComponent } from './criar-cronogramas/criar-cronogramas.component';
import { EditarCronogramasComponent } from './editar-cronogramas/editar-cronogramas.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CronogramaDetalhadoComponent,
    UsuariosComponent,
    CriarUsuariosComponent,
    CronogramasComponent,
    CriarCronogramasComponent,
    EditarCronogramasComponent,
    EditarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
