import { BehaviorSubject, Observable } from 'rxjs';
import { IUdoctores } from '../domain/iudoctores';
import { DoctoresRepository } from '../domain/repository';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GestionDoctoresService {
  private selectedDoctorSubject = new BehaviorSubject<IUdoctores | null>(null);
  selectedDoctor$ = this.selectedDoctorSubject.asObservable();

  constructor(private doctoresRepository: DoctoresRepository) {}

  obtenerDoctores(): Observable<IUdoctores[]> {
    return this.doctoresRepository.getAll();
  }

  agregarDoctor(doctor: IUdoctores): Observable<IUdoctores> {
    return this.doctoresRepository.create(doctor);
  }

  actualizarDoctor(id: number, doctor: IUdoctores): Observable<IUdoctores> {
    return this.doctoresRepository.update(id, doctor);
  }

  eliminarDoctor(id: number): Observable<void> {
    return this.doctoresRepository.delete(id);
  }

  seleccionarDoctor(doctor: IUdoctores | null): void {
    this.selectedDoctorSubject.next(doctor);
  }
}