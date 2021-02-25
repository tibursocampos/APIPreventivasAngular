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
import { EditarAtividadeComponent } from './cronograma-detalhado/editar-atividade/editar-atividade.component';
import { AtividadesDiariasComponent } from './dashboard/graficos/atividades-diarias/atividades-diarias.component';
import { TotalERealizadasComponent } from './dashboard/graficos/total-e-realizadas/total-e-realizadas.component';
import { ChartsModule } from 'ng2-charts';
import { EstadosBrPipe } from './pipes/estados-br.pipe';
import { AnfMgPipe } from './pipes/anf-mg.pipe';
import { AreaTecnicoPipe } from './pipes/area-tecnico.pipe';
import { PermissaoPipe } from './pipes/permissao.pipe';
import { MesesPipe } from './pipes/meses.pipe';
import { NomeSupervisorPipe } from './pipes/nome-supervisor.pipe';
import { AtividadesPipe } from './pipes/atividades.pipe';


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
    EditarAtividadeComponent,
    AtividadesDiariasComponent,
    TotalERealizadasComponent,
    EstadosBrPipe,
    AnfMgPipe,
    AreaTecnicoPipe,
    PermissaoPipe,
    MesesPipe,
    NomeSupervisorPipe,
    AtividadesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpClientModule,CronogramaService, SiteService, CronogramaDetalhadoService, SitesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
