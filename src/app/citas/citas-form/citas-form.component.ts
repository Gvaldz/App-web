import { Component, OnInit } from '@angular/core';
import { citas } from '../iucitas';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.css']
})
export class CitasFormComponent implements OnInit {

  citasTemp: citas = {
    doctor: '',
    paciente: '',
    fecha: '',   
    hora: ''            
  };

  isEditMode = false;  

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.citasService.selectedcita$.subscribe((citas) => {
      if (citas) {
        this.citasTemp = { ...citas };  
        this.isEditMode = true;  
      } else {
        this.resetForm();  
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      const index = this.citasService.getCitas().findIndex(c => c.doctor === this.citasTemp.doctor);
      if (index > -1) {
        this.citasService.updateCita(index, this.citasTemp); 
      }
      this.isEditMode = false;
    } else {
      this.citasService.addCita(this.citasTemp);  
    }
    this.resetForm();  
  }

  resetForm(): void {
    this.citasTemp = {
      doctor: '',
      paciente: '',
      fecha: '',  
      hora: ''           
    };
    this.isEditMode = false;
  }
}
