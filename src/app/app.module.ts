import { SiteService } from './services/site.service';
import { CronogramaService } from './services/cronograma.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CronogramaDetalhadoComponent } from './cronograma-detalhado/cronograma-detalhado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CronogramasComponent } from './cronogramas/cronogramas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SitesComponent } from './sites/sites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavCronoComponent } from './nav-crono/nav-crono.component';
import { CriarCronogramasComponent } from './cronogramas/criar-cronogramas/criar-cronogramas.component';
import { EditarCronogramasComponent } from './cronogramas/editar-cronogramas/editar-cronogramas.component';
import { CriarSitesComponent } from './sites/criar-sites/criar-sites.component';
import { EditarSitesComponent } from './sites/editar-sites/editar-sites.component';
import { CriarUsuariosComponent } from './usuarios/criar-usuarios/criar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';
import { CronogramaDetalhadoService } from './services/cronograma-detalhado.service';
import { AlvosComponent } from './cronogramas/alvos/alvos.component';
import { CriarAlvosComponent } from './cronogramas/alvos/criar-alvos/criar-alvos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CronogramaDetalhadoComponent,
    UsuariosComponent,    
    CronogramasComponent,
    NavbarComponent,
    SitesComponent,
    NavCronoComponent,
    CriarCronogramasComponent,
    EditarCronogramasComponent,
    CriarSitesComponent,
    EditarSitesComponent,
    CriarUsuariosComponent,
    EditarUsuariosComponent,
    TitleComponent,
    AlvosComponent,
    CriarAlvosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,CronogramaService, SiteService, CronogramaDetalhadoService, SitesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
