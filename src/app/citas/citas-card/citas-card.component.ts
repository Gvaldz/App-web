import { Component, OnInit } from '@angular/core';
import { citas } from '../iucitas';
import { CitasService } from '../citas.service';

@Component({
  selector: 'citas-card',
  templateUrl: './citas-card.component.html',
  styleUrls: ['./citas-card.component.css']
})
export class CitasCardComponent implements OnInit {
  citas: citas[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.citasService.citas$.subscribe(data => {
      this.citas = data; 
    });
  }  

  deleteCita(cita: citas): void {
    if (cita.idcitas) {
      this.citasService.deleteCitas(cita.idcitas).subscribe({
        next: () => {
        },
        error: (err) => {
          console.error("Error al eliminar cita", err);
        }
      });
    } else {
      console.error("ID de cita no definido");
    }
  }
  
  updateCita(cita: citas): void {
    this.citasService.selectCitaForEdit(cita); 
  }
}
