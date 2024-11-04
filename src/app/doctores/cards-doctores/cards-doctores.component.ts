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
    this.doctorService.doctores$.subscribe(data => {
      this.doctores = data;
    });
  }

  deleteDoctor(doctor: IUdoctores): void {
    this.doctorService.deleteDoctor(doctor.idDoctores).subscribe();
  }

  updateDoctor(doctor: IUdoctores): void {
    this.doctorService.selectDoctorForEdit(doctor);
  }
}
