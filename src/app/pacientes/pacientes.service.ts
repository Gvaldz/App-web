import { Injectable } from '@angular/core';
import { IUpacientes } from './iupacientes';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  
  private apiUrl = 'http://127.0.0.1:8080/Patients';
  private selectedpaciente = new BehaviorSubject<IUpacientes | null>(null);
  selectedpaciente$ = this.selectedpaciente.asObservable();
  private pacientesSubject = new BehaviorSubject<IUpacientes[]>([]);
  pacientes$ = this.pacientesSubject.asObservable(); 

  constructor(private http: HttpClient) {
    this.loadPacientes(); 
  }

  private loadPacientes() {
    this.getPacientes().subscribe(data => {
      this.pacientesSubject.next(data);
      console.log(data);
    });
  }

  getPacientes(): Observable<IUpacientes[]> {
    return this.http.get<IUpacientes[]>(this.apiUrl);
  }

  addPaciente(paciente: IUpacientes): Observable<IUpacientes> {
    return this.http.post<IUpacientes>(this.apiUrl, paciente).pipe(
      tap(() => {
        this.loadPacientes(); 
      })
    );
  }
  
  updatePaciente(id: number, paciente: IUpacientes): Observable<IUpacientes> {
    return this.http.put<IUpacientes>(`${this.apiUrl}/${id}`, paciente).pipe(
      tap(() => {
        this.loadPacientes(); 
      })
    );
  }

  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.pacientesSubject.next(this.pacientesSubject.getValue().filter(p => p.IdPatients !== id));
      })
    );
  }

  selectPacienteForEdit(paciente: IUpacientes) {
    this.selectedpaciente.next(paciente);
  }
}
