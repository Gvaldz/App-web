import { Component, OnInit } from '@angular/core';
import { citas } from '../iucitas';
import { CitasService } from '../citas.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.css'],
  providers: [DatePipe]
})
export class CitasFormComponent implements OnInit {
  citaTemp: citas = {
    idcitas: 0,
    iddoctor: 0,
    idpaciente: 0,
    fecha: '',
    hora: ''
  };

  doctores: { idDoctores: number, nombres: string, apellidos: string }[] = [];
  pacientes: { idPacientes: number, nombres: string, apellidos: string }[] = [];
  isEditMode = false;
  isFormValid: boolean = true;

  constructor(
    private citasService: CitasService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.citasService.getDoctores().subscribe(doctores => {
      this.doctores = doctores;
    });
    this.citasService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
    
    this.citasService.selectedcita$.subscribe((cita) => {
      if (cita) {
        this.citaTemp = {
          idcitas: cita.idcitas,
          iddoctor: this.doctores.find(doctor => doctor.nombres === cita.doctor_nombre && doctor.apellidos === cita.doctor_apellido)?.idDoctores || 0,
          idpaciente: this.pacientes.find(paciente => paciente.nombres === cita.paciente_nombre && paciente.apellidos === cita.paciente_apellido)?.idPacientes || 0,
          fecha: this.datePipe.transform(cita.fecha, 'yyyy-MM-dd') || '',
          hora: cita.hora
        };
        this.isEditMode = true;
      } else {
        this.resetForm();
      }
    });
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.citaTemp.fecha = this.datePipe.transform(this.citaTemp.fecha, 'yyyy-MM-dd') as string;

      if (this.isEditMode) {
        this.citasService.updateCitas(this.citaTemp.idcitas, this.citaTemp).subscribe(() => {
          this.resetForm();
        });
        this.isEditMode = false;
      } else {
        this.citasService.addCita(this.citaTemp).subscribe(() => {
          this.resetForm();
        });
      }
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }

  validateForm(): boolean {
    return this.citaTemp.iddoctor > 0 && this.citaTemp.idpaciente > 0 &&
           this.citaTemp.fecha !== '' && this.citaTemp.hora !== '';
  }

  resetForm(): void {
    this.citaTemp = { idcitas: 0, iddoctor: 0, idpaciente: 0, fecha: '', hora: '' };
    this.isEditMode = false;
  }
}
