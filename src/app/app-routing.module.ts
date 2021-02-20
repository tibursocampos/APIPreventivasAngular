import { CriarAlvosComponent } from './cronogramas/alvos/criar-alvos/criar-alvos.component';
import { AlvosComponent } from './cronogramas/alvos/alvos.component';
import { SitesComponent } from './sites/sites.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CronogramaDetalhadoComponent } from './cronograma-detalhado/cronograma-detalhado.component';
import { CronogramasComponent } from './cronogramas/cronogramas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarCronogramasComponent } from './cronogramas/criar-cronogramas/criar-cronogramas.component';
import { CriarSitesComponent } from './sites/criar-sites/criar-sites.component';
import { CriarUsuariosComponent } from './usuarios/criar-usuarios/criar-usuarios.component';
import { EditarSitesComponent } from './sites/editar-sites/editar-sites.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  {    
  path:'',
  redirectTo: 'dashboard', 
  pathMatch: 'full',    
  },
  {
  path: 'cronograma-criar',
  component: CriarCronogramasComponent,
  data: { title: 'Criar Cronograma' }
  },
  {
    path: 'sites-criar',
    component: CriarSitesComponent,
    data: { title: 'Criar Site' }
    },
  {
    path: 'usuario-criar',
    component: CriarUsuariosComponent,
    data: { title: 'Criar Usuario' }
  },
  {
    path: 'cronograma-detalhado',
    component: CronogramaDetalhadoComponent,
    data: { title: 'Cronograma Detalhado' }
  },
  {
    path: 'cronogramas',
    component: CronogramasComponent,
    data: { title: 'Cronogramas' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'cronograma-editar/:idCronograma',
    component: CriarCronogramasComponent,
    data: { title: 'Editar Cronograma' }
  },
  {
    path: 'site-editar/:idSite',
    component: EditarSitesComponent,
    data: { title: 'Editar Site' }
  },
  {
    path: 'usuario-editar/:idCronograma',
    component: EditarUsuariosComponent,
    data: { title: 'Editar Usuario' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'sites',
    component: SitesComponent,
    data: { title: 'Sites' }
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { title: 'Usuarios' }
  },
  {
    path: 'alvos/:idCronograma',
    component: AlvosComponent,
    data: { title: 'Alvos' }
  },
  {
    path: 'alvo-criar/:idCronograma',
    component: CriarAlvosComponent,
    data: { title: 'Criar Alvo' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
