import { Component, OnInit } from '@angular/core';
import { IUpacientes } from '../../domain/iupacientes';
import { GestionPacientesService } from '../../application/UseCases';

@Component({
  selector: 'app-pacientes-cards',
  templateUrl: './pacientes-cards.component.html',
  styleUrls: ['./pacientes-cards.component.css']
})

export class PacientesCardsComponent implements OnInit {
  pacientes: IUpacientes[] = [];

  constructor(private gestionPacientes: GestionPacientesService) {}

  ngOnInit(): void {
    this.gestionPacientes.obtenerPacientees().subscribe(data => {
      this.pacientes = data;
    });
  }

  deletePaciente(paciente: IUpacientes): void {
    this.gestionPacientes.eliminarPaciente(paciente.IdPatients).subscribe(() => {
      this.pacientes = this.pacientes.filter(p => p.IdPatients !== paciente.IdPatients);
    });
  }

  updatePaciente(paciente: IUpacientes): void {
    this.gestionPacientes.seleccionarPaciente(paciente);
  }
}