import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { DoctoresDashboardComponent } from './doctores/doctores-dashboard/doctores-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DoctoresFormComponent } from './doctores/doctores-form/doctores-form.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { FormsModule } from '@angular/forms';
import { CardsSectionComponent } from './doctores/cards-section/cards-section.component';
import { CardsDoctoresComponent } from './doctores/cards-doctores/cards-doctores.component';
import { PacientesDashboardComponent } from './pacientes/pacientes-dashboard/pacientes-dashboard.component';
import { PacientesFormComponent } from './pacientes/pacientes-form/pacientes-form.component';
import { PacientesCardsComponent } from './pacientes/pacientes-cards/pacientes-cards.component';
import { PacientesCardsSectionComponent } from './pacientes/pacientes-cards-section/pacientes-cards-section.component';
import { CitasCardComponent } from './citas/citas-card/citas-card.component';
import { CitasCardSectionComponent } from './citas/citas-card-section/citas-card-section.component';
import { CitasFormComponent } from './citas/citas-form/citas-form.component';
import { CitasDashboardComponent } from './citas/citas-dashboard/citas-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    DoctoresDashboardComponent,
    HeaderComponent,
    ButtonsComponent,
    DoctoresFormComponent,
    ButtonSaveComponent,
    CardsSectionComponent,
    CardsDoctoresComponent,
    PacientesDashboardComponent,
    PacientesFormComponent,
    PacientesCardsComponent,
    PacientesCardsSectionComponent,
    CitasCardComponent,
    CitasCardSectionComponent,
    CitasFormComponent,
    CitasDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
