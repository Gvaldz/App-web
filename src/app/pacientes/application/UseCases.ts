import { BehaviorSubject, Observable } from 'rxjs';
import { IUpacientes } from '../domain/iupacientes';
import { PacientesRepository } from '../domain/repository';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GestionPacientesService {
  private selectedPacienteSubject = new BehaviorSubject<IUpacientes | null>(null);
  selectedPaciente$ = this.selectedPacienteSubject.asObservable();

  constructor(private pacientesrepository: PacientesRepository) {}

  obtenerPacientees(): Observable<IUpacientes[]> {
    return this.pacientesrepository.getAll();
  }

  agregaPaciente(paciente: IUpacientes): Observable<IUpacientes> {
    return this.pacientesrepository.create(paciente);
  }

  actualizarPaciente(id: number, paciente: IUpacientes): Observable<IUpacientes> {
    return this.pacientesrepository.update(id, paciente);
  }

  eliminarPaciente(id: number): Observable<void> {
    return this.pacientesrepository.delete(id);
  }

  seleccionarPaciente(paciente: IUpacientes | null): void {
    this.selectedPacienteSubject.next(paciente);
  }
}