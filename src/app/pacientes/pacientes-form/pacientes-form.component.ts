import { Component, OnInit } from '@angular/core';
import { IUpacientes } from '../iupacientes';
import { PacientesService } from '../pacientes.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css'],
  providers: [DatePipe]
})
export class PacientesFormComponent implements OnInit {
  pacienteTemp: IUpacientes = {
    IdPatients: 0,
    Nombres: '',
    Apellidos: '',
    Nacimiento: null,
    Peso: 0,
    Estatura: 0
  };

  isEditMode = false;
  isFormValid: boolean = true;

  constructor(
    private pacienteService: PacientesService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.pacienteService.selectedpaciente$.subscribe((paciente) => {
      if (paciente) {
        this.pacienteTemp = { ...paciente };
        this.isEditMode = true;
      } else {
        this.resetForm();
      }
    });
  }

  onSubmit() {
    if (this.validateForm()) {
      this.pacienteTemp.Nacimiento = this.datePipe.transform(this.pacienteTemp.Nacimiento, 'yyyy-MM-dd') as string;
  
      this.pacienteTemp.Peso = Number(this.pacienteTemp.Peso);
      this.pacienteTemp.Estatura = Number(this.pacienteTemp.Estatura);
  
      if (this.isEditMode) {
        this.pacienteService.updatePaciente(this.pacienteTemp.IdPatients, this.pacienteTemp).subscribe(() => {
          this.resetForm();
        });
        this.isEditMode = false;
      } else {
        this.pacienteService.addPaciente(this.pacienteTemp).subscribe(() => {
          this.resetForm();
        });
      }
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
  

  validateForm(): boolean {
    return this.pacienteTemp.Nombres !== '' && this.pacienteTemp.Apellidos !== '' &&
           this.pacienteTemp.Nacimiento !== null && this.pacienteTemp.Peso >= 0 && 
           this.pacienteTemp.Estatura >= 0  
  }

  resetForm(): void {
    this.pacienteTemp = { IdPatients: 0 , Nombres: '', Apellidos: '', Nacimiento: null, Peso: 0, Estatura: 0};
    this.isEditMode = false;
  }
}
