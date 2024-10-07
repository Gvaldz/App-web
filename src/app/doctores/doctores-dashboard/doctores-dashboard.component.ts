import { Component } from '@angular/core';
import { IUdoctores } from '../iudoctores';
import { DoctoresSeviceService } from '../doctores-sevice.service';

@Component({
  selector: 'app-doctores-dashboard',
  templateUrl: './doctores-dashboard.component.html',
  styleUrl: './doctores-dashboard.component.css'
})
export class DoctoresDashboardComponent {
  doctor: IUdoctores = {
    nombre: '',
    especialidad: '',
    cedula: 0,
    telefono: 0,
    correo: ''
  };

  constructor(private doctorService: DoctoresSeviceService) {}

  saveDoctor() {
    this.doctorService.addDoctor(this.doctor);
  }
}
