import { Observable } from 'rxjs';
import { IUpacientes } from './iupacientes';

export abstract class PacientesRepository {
  abstract getAll(): Observable<IUpacientes[]>;
  abstract create(paciente: IUpacientes): Observable<IUpacientes>;
  abstract update(id: number, paciente: IUpacientes): Observable<IUpacientes>;
  abstract delete(id: number): Observable<void>;
}