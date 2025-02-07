import { Component, OnInit } from '@angular/core';
import { IUdoctores } from '../iudoctores';
import { DoctoresSeviceService } from '../doctores-sevice.service';

@Component({
  selector: 'app-doctores-form',
  templateUrl: './doctores-form.component.html',
  styleUrls: ['./doctores-form.component.css']
})
export class DoctoresFormComponent implements OnInit {
  doctorTemp: IUdoctores = {
    IdDoctores: 0,
    Nombres: '',
    Apellidos: '',
    Especialidad: '',
    Cedula: null,
  };
  isEditMode = false;
  isFormValid: boolean = true;

  especialidades: string[] = ['Cardiología', 'Pediatría', 'Dermatología', 'Neurología'];

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
    if (this.validateForm()) {
      this.doctorTemp.Cedula = Number(this.doctorTemp.Cedula);
  
      if (this.isEditMode) {
        this.doctorService.updateDoctor(this.doctorTemp.IdDoctores, this.doctorTemp).subscribe(() => {
          this.resetForm();
        });
        this.isEditMode = false;
      } else {
        this.doctorService.addDoctor(this.doctorTemp).subscribe(() => {
          this.resetForm();
        });
      }
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
  

  validateForm(): boolean {
    const isCedulaValid = this.doctorTemp.Cedula && String(this.doctorTemp.Cedula).length <= 10;
    return this.doctorTemp.Nombres !== '' && this.doctorTemp.Apellidos !== '' && 
           this.doctorTemp.Especialidad !== '' && isCedulaValid;
  }

  resetForm(): void {
    this.doctorTemp = {
      IdDoctores: 0,
      Nombres: '',
      Apellidos: '',
      Especialidad: '',
      Cedula: null,
    };
    this.isEditMode = false;
  }
}
