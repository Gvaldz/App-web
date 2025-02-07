import { Component, OnInit } from '@angular/core';
import { IUpacientes } from '../iupacientes';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-pacientes-cards',
  templateUrl: './pacientes-cards.component.html',
  styleUrls: ['./pacientes-cards.component.css']
})
export class PacientesCardsComponent implements OnInit {
  pacientes: IUpacientes[] = [];

  constructor(private pacienteService: PacientesService) {}

  ngOnInit(): void {
    this.pacienteService.pacientes$.subscribe(data => {
      this.pacientes = data;
    });
  }

  deletePaciente(paciente: IUpacientes): void {
    this.pacienteService.deletePaciente(paciente.IdPatients).subscribe();
  }

  updatePaciente(paciente: IUpacientes): void {
    this.pacienteService.selectPacienteForEdit(paciente);
  }
}
