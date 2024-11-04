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
    idDoctores: 0,
    nombres: '',
    apellidos: '',
    especialidad: '',
    cedula: null,
    horario: '',
    telefono: null,
    correo: ''
  };
  isEditMode = false;
  isFormValid: boolean = true;

  especialidades: string[] = [];
  horarios: string[] = ['Matutino', 'Vespertino'];

  constructor(private doctorService: DoctoresSeviceService) {}

  ngOnInit(): void {
    this.doctorService.getEspecialidades().subscribe((data) => {
      this.especialidades = data.map((item: { Especialidad: string }) => item.Especialidad);
    });

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
      if (this.isEditMode) {
        this.doctorService.updateDoctor(this.doctorTemp.idDoctores, this.doctorTemp).subscribe(() => {
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
    const isCedulaValid = this.doctorTemp.cedula && String(this.doctorTemp.cedula).length <= 10;
    return this.doctorTemp.nombres !== '' && this.doctorTemp.apellidos !== '' && 
           this.doctorTemp.especialidad !== '' && isCedulaValid;
  }

  resetForm(): void {
    this.doctorTemp = {
      idDoctores: 0,
      nombres: '',
      apellidos: '',
      especialidad: '',
      cedula: null,
      horario: '',
      telefono: null,
      correo: ''
    };
    this.isEditMode = false;
  }
}
