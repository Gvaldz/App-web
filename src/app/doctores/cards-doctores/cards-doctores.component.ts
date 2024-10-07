import { Component, OnInit } from '@angular/core';
import { DoctoresSeviceService } from '../doctores-sevice.service';
import { IUdoctores } from '../iudoctores';

@Component({
  selector: 'app-cards-doctores',
  templateUrl: './cards-doctores.component.html',
  styleUrls: ['./cards-doctores.component.css']
})
export class CardsDoctoresComponent implements OnInit {

  doctores: IUdoctores[] = [];

  constructor(private doctorService: DoctoresSeviceService) {}

  ngOnInit(): void {
    this.doctores = this.doctorService.getDoctors();
  }

  deleteDoctor(doctor: IUdoctores): void {
    const index = this.doctores.indexOf(doctor);
    if (index > -1) {
      this.doctorService.deleteDoctor(index);
      this.doctores = this.doctorService.getDoctors(); 
    }
  }

  updateDoctor(doctor: IUdoctores): void {
    this.doctorService.selectDoctorForEdit(doctor);
  }
}
