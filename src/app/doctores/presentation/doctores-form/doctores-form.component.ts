import { Component, OnInit } from '@angular/core';
import { IUdoctores } from '../../domain/iudoctores';
import { GestionDoctoresService } from '../../application/UseCases';

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
    Cedula: 0,
  };
  isEditMode = false;
  isFormValid: boolean = true;

  especialidades: string[] = ['Cardiología', 'Pediatría', 'Dermatología', 'Neurología'];

  constructor(private gestionDoctores: GestionDoctoresService) {}

  ngOnInit(): void {
    this.gestionDoctores.selectedDoctor$.subscribe((doctor: IUdoctores | null) => {
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
        this.gestionDoctores.actualizarDoctor(this.doctorTemp.IdDoctores, this.doctorTemp).subscribe(() => {
          this.resetForm();
        });
        this.isEditMode = false;
      } else {
        this.gestionDoctores.agregarDoctor(this.doctorTemp).subscribe(() => {
          this.resetForm();
        });
      }
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }

  validateForm(): boolean {
    return this.doctorTemp.Nombres !== '' && this.doctorTemp.Apellidos !== '' && 
           this.doctorTemp.Especialidad !== '' && this.doctorTemp.Cedula !== 0;
  }

  resetForm(): void {
    this.doctorTemp = {
      IdDoctores: 0,
      Nombres: '',
      Apellidos: '',
      Especialidad: '',
      Cedula: 0
    };
    this.isEditMode = false;
  }
}
