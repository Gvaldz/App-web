import { Injectable } from '@angular/core';
import { citas } from './iucitas';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: citas[] = [];
  
  private selectedcitaSubject = new BehaviorSubject<citas | null>(null);
  selectedcita$ = this.selectedcitaSubject.asObservable();  

  constructor() {}

  addCita(cita: citas): void {
    this.citas.push(cita);
    console.log(cita);
  }

  getCitas(): citas[] {
    return this.citas;
  }

  updateCita(index: number, cita: citas): void {
    this.citas[index] = cita;
  }

  deleteCita(index: number): void {
    this.citas.splice(index, 1);
  }

  selectCitaForEdit(cita: citas): void {
    this.selectedcitaSubject.next(cita);  
  }

  clearSelectedCita(): void {
    this.selectedcitaSubject.next(null);  
  }
}
