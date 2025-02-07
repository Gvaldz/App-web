import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDoctoresComponent } from './presentation/cards-doctores/cards-doctores.component';
import { DoctoresFormComponent } from './presentation/doctores-form/doctores-form.component';
import DoctoresDashboardComponent from './presentation/doctores-dashboard/doctores-dashboard.component';
import { CardsSectionComponent } from './presentation/cards-section/cards-section.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  
    DoctoresFormComponent,
    CardsSectionComponent,
    DoctoresDashboardComponent,
    CardsDoctoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DoctoresDashboardComponent,
    DoctoresFormComponent,
    CardsSectionComponent,
    CardsDoctoresComponent
  ]
})
export class DoctoresModule {
}
