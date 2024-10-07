import { Injectable } from '@angular/core';
import { IUdoctores } from './iudoctores';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctoresSeviceService {

  private doctors: IUdoctores[] = [];
  
  private selectedDoctorSubject = new BehaviorSubject<IUdoctores | null>(null);
  selectedDoctor$ = this.selectedDoctorSubject.asObservable();  

  constructor() {}

  addDoctor(doctor: IUdoctores): void {
    this.doctors.push(doctor);
    console.log(doctor);
  }

  getDoctors(): IUdoctores[] {
    return this.doctors;
  }

  updateDoctor(index: number, doctor: IUdoctores): void {
    this.doctors[index] = doctor;
  }

  deleteDoctor(index: number): void {
    this.doctors.splice(index, 1);
  }

  selectDoctorForEdit(doctor: IUdoctores): void {
    this.selectedDoctorSubject.next(doctor);  
  }

  clearSelectedDoctor(): void {
    this.selectedDoctorSubject.next(null);  
  }
}
