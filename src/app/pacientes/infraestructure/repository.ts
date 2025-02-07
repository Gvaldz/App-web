import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUpacientes } from '../domain/iupacientes';
import { PacientesRepository } from '../domain/repository';

@Injectable({ providedIn: 'root' })

export class PacientesRepositoryImpl extends PacientesRepository {
  private apiUrl = 'http://127.0.0.1:8080/patients';
  selectedPaciente$: any;

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<IUpacientes[]> {
    return this.http.get<IUpacientes[]>(this.apiUrl);
  }

  create(paciente: IUpacientes): Observable<IUpacientes> {
    return this.http.post<IUpacientes>(this.apiUrl, paciente);
  }

  update(id: number, paciente: IUpacientes): Observable<IUpacientes> {
    return this.http.put<IUpacientes>(`${this.apiUrl}/${id}`, paciente);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
