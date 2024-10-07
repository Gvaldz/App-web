import { Component, OnInit } from '@angular/core';
import { citas } from '../iucitas';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas-card',
  templateUrl: './citas-card.component.html',
  styleUrl: './citas-card.component.css'
})
export class CitasCardComponent implements OnInit {

  citas: citas[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.citas = this.citasService.getCitas();
  }

  deleteCita(cita: citas): void {
    const index = this.citas.indexOf(cita);
    if (index > -1) {
      this.citasService.deleteCita(index);
      this.citas = this.citasService.getCitas(); 
    }
  }

  updateCita(cita: citas): void {
    this.citasService.selectCitaForEdit(cita);
  }

}
