import { Injectable } from '@angular/core';
import { citas } from './iucitas';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://54.173.131.38:8080/api/citas';

  private selectedcitaSubject = new BehaviorSubject<citas | null>(null);
  selectedcita$ = this.selectedcitaSubject.asObservable();

  private citasSubject = new BehaviorSubject<citas[]>([]);
  citas$ = this.citasSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCitas(); 
  }

  private loadCitas() {
    this.getCitas().subscribe(data => {
      this.citasSubject.next(data);
    });
  }

  getCitas(): Observable<citas[]> {
    return this.http.get<citas[]>(this.apiUrl);
  }

  addCita(cita: citas): Observable<citas> {
    return this.http.post<citas>(this.apiUrl, cita).pipe(
      tap(() => {
        this.loadCitas(); 
      })
    );
  }
  
  deleteCitas(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.citasSubject.next(this.citasSubject.getValue().filter(c => c.idcitas !== id));
      })
    );
  }
  

  updateCitas(id: number, citas: citas): Observable<citas> {
    return this.http.put<citas>(`${this.apiUrl}/${id}`, citas).pipe(
      tap(() => {
        this.loadCitas(); 
      })
    );
  }
  
  getDoctores(): Observable<{ idDoctores: number, nombres: string, apellidos: string }[]> {
    return this.http.get<{ idDoctores: number, nombres: string, apellidos: string }[]>('http://54.173.131.38:8080/api/doctores');
  }

  getPacientes(): Observable<{ idPacientes: number, nombres: string, apellidos: string }[]> {
    return this.http.get<{ idPacientes: number, nombres: string, apellidos: string }[]>('http://54.173.131.38:8080/api/pacientes');
  }

  selectCitaForEdit(cita: citas): void {
    this.selectedcitaSubject.next(cita);
  }

  clearSelectedCita(): void {
    this.selectedcitaSubject.next(null);
  }
}
