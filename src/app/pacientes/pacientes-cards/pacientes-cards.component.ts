import { Component } from '@angular/core';
import { IUpacientes } from '../iupacientes';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-pacientes-cards',
  templateUrl: './pacientes-cards.component.html',
  styleUrl: './pacientes-cards.component.css'
})
export class PacientesCardsComponent {

  pacientes: IUpacientes[] = [];

  constructor(private pacienteService: PacientesService) {}

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getPacientes();
  }

  deletePaciente(paciente: IUpacientes): void {
    const index = this.pacientes.indexOf(paciente);
    if (index > -1) {
      this.pacienteService.deletePaciente(index);
      this.pacientes = this.pacienteService.getPacientes(); 
    }
  }

  updatePaciente(paciente: IUpacientes): void {
    this.pacienteService.selectPacienteForEdit(paciente);
  }
}
