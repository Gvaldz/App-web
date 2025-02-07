import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DoctoresDashboardComponent from './doctores/doctores-dashboard/doctores-dashboard.component';
import { HomeComponent } from './shared/home/home.component';
import { PacientesDashboardComponent } from './pacientes/pacientes-dashboard/pacientes-dashboard.component';

const routes: Routes = [

  { path: '',
    component: HomeComponent    
  },
  {
    path: 'doctores',
    component: DoctoresDashboardComponent
  },
  {
    path: 'pacientes',
    component: PacientesDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
