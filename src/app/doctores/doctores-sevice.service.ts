import { Injectable } from '@angular/core';
import { IUdoctores } from './iudoctores';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctoresSeviceService {
  private apiUrl = 'http://127.0.0.1:8080/doctors';


  private selectedDoctor = new BehaviorSubject<IUdoctores | null>(null);
  selectedDoctor$ = this.selectedDoctor.asObservable();

  private doctoresSubject = new BehaviorSubject<IUdoctores[]>([]);
  doctores$ = this.doctoresSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadDoctores();
  }

  private loadDoctores() {
    this.getDoctores().subscribe(data => {
      this.doctoresSubject.next(data);
    });
  }

  getDoctores(): Observable<IUdoctores[]> {
    return this.http.get<IUdoctores[]>(this.apiUrl);
  }

  addDoctor(doctor: IUdoctores): Observable<IUdoctores> {
    return this.http.post<IUdoctores>(this.apiUrl, doctor).pipe(
      tap(() => {
        this.loadDoctores(); 
      })
    );
  }
  
  updateDoctor(id: number, doctor: IUdoctores): Observable<IUdoctores> {
    return this.http.put<IUdoctores>(`${this.apiUrl}/${id}`, doctor).pipe(
      tap(() => {
        this.loadDoctores(); 
      })
    );
  }

  deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.doctoresSubject.next(this.doctoresSubject.getValue().filter(d => d.IdDoctores !== id));
      })
    );
  }

  selectDoctorForEdit(doctor: IUdoctores) {
    this.selectedDoctor.next(doctor);
  }
}
