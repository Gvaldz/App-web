import { Component, OnInit } from '@angular/core';
import { IUdoctores } from '../../domain/iudoctores';
import { GestionDoctoresService } from '../../application/UseCases';

@Component({
  selector: 'app-cards-doctores',
  templateUrl: './cards-doctores.component.html',
  styleUrls: ['./cards-doctores.component.css']
})


export class CardsDoctoresComponent implements OnInit {
  doctores: IUdoctores[] = [];

  constructor(private gestionDoctores: GestionDoctoresService) {}

  ngOnInit(): void {
    this.gestionDoctores.obtenerDoctores().subscribe(data => {
      this.doctores = data;
    });
  }

  deleteDoctor(doctor: IUdoctores): void {
    this.gestionDoctores.eliminarDoctor(doctor.IdDoctores).subscribe();
  }

  updateDoctor(doctor: IUdoctores): void {
    this.gestionDoctores.seleccionarDoctor(doctor); 
  }
}
