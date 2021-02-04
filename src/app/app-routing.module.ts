import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { EditarCronogramasComponent } from './editar-cronogramas/editar-cronogramas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CronogramaDetalhadoComponent } from './cronograma-detalhado/cronograma-detalhado.component';
import { CriarUsuariosComponent } from './criar-usuarios/criar-usuarios.component';
import { CriarCronogramasComponent } from './criar-cronogramas/criar-cronogramas.component';
import { CronogramasComponent } from './cronogramas/cronogramas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cronograma-criar',
    component: CriarCronogramasComponent,
    data: { title: 'Criar Cronograma' }
  },
  {
    path: 'usuario-criar',
    component: CriarUsuariosComponent,
    data: { title: 'Criar Usuario' }
  },
  {
    path: 'cronograma-detalhado/:id',
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
    path: 'cronograma-editar/:id',
    component: EditarCronogramasComponent,
    data: { title: 'Editar Cronograma' }
  },
  {
    path: 'usuario-editar/:id',
    component: EditarUsuariosComponent,
    data: { title: 'Editar Usuario' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { title: 'Usuarios' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
