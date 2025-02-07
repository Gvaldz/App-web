import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DoctoresModule } from './doctores/doctores.module';
import PacientesModule from './pacientes/pacientes.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './shared/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionDoctoresService } from './doctores/application/UseCases';
import { DoctoresRepository } from './doctores/domain/repository';
import { DoctoresRepositoryImpl } from './doctores/infraestructure/repository';
import { GestionPacientesService } from './pacientes/application/UseCases';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DoctoresModule,
    PacientesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GestionDoctoresService,
    { provide: DoctoresRepository, useClass: DoctoresRepositoryImpl },
    GestionPacientesService,
    { provide: DoctoresRepository, useClass: DoctoresRepositoryImpl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
