import { Injectable } from '@angular/core';
import { IUpacientes } from './iupacientes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private pacientes: IUpacientes[] = []


  private selectedpacienteSubject = new BehaviorSubject<IUpacientes | null>(null);
  selectedpaciente$ = this.selectedpacienteSubject.asObservable();  

  constructor() {}

  addPaciente(paciente: IUpacientes): void {
    this.pacientes.push(paciente);
    console.log(paciente);
  }

  getPacientes(): IUpacientes[] {
    return this.pacientes;
  }

  updatePaciente(index: number, paciente: IUpacientes): void {
    this.pacientes[index] = paciente;
  }

  deletePaciente(index: number): void {
    this.pacientes.splice(index, 1);
  }

  selectPacienteForEdit(paciente: IUpacientes): void {
    this.selectedpacienteSubject.next(paciente);  
  }

  clearSelectedPaciente(): void {
    this.selectedpacienteSubject.next(null);  
  }
}
