import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CitasDashboardComponent } from './citas-dashboard/citas-dashboard.component';
import { CitasFormComponent } from './citas-form/citas-form.component';
import { CitasCardSectionComponent } from './citas-card-section/citas-card-section.component';
import { CitasCardComponent } from './citas-card/citas-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CitasCardComponent,
    CitasCardSectionComponent,
    CitasFormComponent,
    CitasDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CitasModule { }
