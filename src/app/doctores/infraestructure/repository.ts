import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUdoctores } from '../domain/iudoctores';
import { DoctoresRepository } from '../domain/repository';

@Injectable({ providedIn: 'root' })

export class DoctoresRepositoryImpl extends DoctoresRepository {
  private apiUrl = 'http://127.0.0.1:8080/doctors';
  selectedDoctor$: any;

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<IUdoctores[]> {
    return this.http.get<IUdoctores[]>(this.apiUrl);
  }

  create(doctor: IUdoctores): Observable<IUdoctores> {
    return this.http.post<IUdoctores>(this.apiUrl, doctor);
  }

  update(id: number, doctor: IUdoctores): Observable<IUdoctores> {
    return this.http.put<IUdoctores>(`${this.apiUrl}/${id}`, doctor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
