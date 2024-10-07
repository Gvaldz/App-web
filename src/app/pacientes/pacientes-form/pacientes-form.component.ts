import { Component } from '@angular/core';
import { IUpacientes } from '../iupacientes';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrl: './pacientes-form.component.css'
})
export class PacientesFormComponent {

  pacienteTemp: IUpacientes = {
    nombre: '',
    edad: 0,
    peso: 0,
    estatura: 0,
    telefono: 0
  };
  isEditMode = false;  

  constructor(private pacienteService: PacientesService) {}

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
    if (this.isEditMode) {
      const index = this.pacienteService.getPacientes().findIndex(d => d.nombre === this.pacienteTemp.nombre);
      if (index > -1) {
        this.pacienteService.updatePaciente(index, this.pacienteTemp); 
      }
      this.isEditMode = false;
    } else {
      this.pacienteService.addPaciente(this.pacienteTemp); 
    }
    this.resetForm(); 
  }

  resetForm(): void {
    this.pacienteTemp = {    nombre: '', edad: 0, peso: 0, estatura: 0, telefono: 0};
    this.isEditMode = false;
  }

}
