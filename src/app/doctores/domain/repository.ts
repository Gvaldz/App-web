import { Observable } from 'rxjs';
import { IUdoctores } from '../domain/iudoctores';

export abstract class DoctoresRepository {
  abstract getAll(): Observable<IUdoctores[]>;
  abstract create(doctor: IUdoctores): Observable<IUdoctores>;
  abstract update(id: number, doctor: IUdoctores): Observable<IUdoctores>;
  abstract delete(id: number): Observable<void>;
}