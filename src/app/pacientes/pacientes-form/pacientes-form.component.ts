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
    idPacientes: 0,
    nombres: '',
    apellidos: '',
    nacimiento: null,
    peso: null,
    estatura: null,
    telefono: null
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
      this.pacienteTemp.nacimiento = this.datePipe.transform(this.pacienteTemp.nacimiento, 'yyyy-MM-dd') as string;

      if (this.isEditMode) {
        this.pacienteService.updatePaciente(this.pacienteTemp.idPacientes, this.pacienteTemp).subscribe(() => {
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
    return this.pacienteTemp.nombres !== '' && this.pacienteTemp.apellidos !== '' &&
           this.pacienteTemp.nacimiento !== null && this.pacienteTemp.peso >= 0 && 
           this.pacienteTemp.estatura >= 0 && 
           this.pacienteTemp.telefono && String(this.pacienteTemp.telefono).length === 10;
  }

  resetForm(): void {
    this.pacienteTemp = { idPacientes: 0 ,nombres: '', apellidos: '', nacimiento: null, peso: null, estatura: null, telefono: null };
    this.isEditMode = false;
  }
}
