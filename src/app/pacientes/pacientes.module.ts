import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesFormComponent } from './presentation/pacientes-form/pacientes-form.component';
import { PacientesCardsComponent } from './presentation/pacientes-cards/pacientes-cards.component';
import { PacientesCardsSectionComponent } from './presentation/pacientes-cards-section/pacientes-cards-section.component';
import { SharedModule } from '../shared/shared.module';
import { PacientesDashboardComponent } from './presentation/pacientes-dashboard/pacientes-dashboard.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PacientesCardsComponent,
    PacientesCardsSectionComponent,
    PacientesDashboardComponent,
    PacientesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export default class PacientesModule { }
