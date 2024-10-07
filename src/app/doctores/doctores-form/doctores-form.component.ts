import { Component, OnInit } from '@angular/core';
import { IUdoctores } from '../iudoctores';
import { DoctoresSeviceService } from '../doctores-sevice.service';

@Component({
  selector: 'app-doctores-form',
  templateUrl: './doctores-form.component.html',
  styleUrl: './doctores-form.component.css'
})


export class DoctoresFormComponent implements OnInit {

  doctorTemp: IUdoctores = {
    id: this.generateUniqueId(),
    nombre: '',
    especialidad: '',
    cedula: 0,
    telefono: 0,
    correo: ''
  };
  isEditMode = false;  

  generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  constructor(private doctorService: DoctoresSeviceService) {}

  ngOnInit(): void {
    this.doctorService.selectedDoctor$.subscribe((doctor) => {
      if (doctor) {
        this.doctorTemp = { ...doctor };  
        this.isEditMode = true;  
      } else {
        this.resetForm(); 
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      const index = this.doctorService.getDoctors().findIndex(d => d.id === this.doctorTemp.id);
      if (index > -1) {
        this.doctorService.updateDoctor(index, this.doctorTemp); 
      }
      this.isEditMode = false;
    } else {
      this.doctorService.addDoctor(this.doctorTemp); 
    }
    this.resetForm(); 
  }

  resetForm(): void {
    this.doctorTemp = {id: '', nombre: '', especialidad: '', cedula: 0, telefono: 0, correo: '' };
    this.isEditMode = false;
  }
}