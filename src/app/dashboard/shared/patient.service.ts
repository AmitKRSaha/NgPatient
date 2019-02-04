import { Injectable } from '@angular/core';
import { Subject, Observable, of   } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Patient } from './patient';
import { pipe } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient) { }

  // Observable string sources
  private patients = new Subject<string>();
  private apiHost = '../../../assets/patient-detail.json';
  private patientdetail: Patient[];

  // Observable string streams
  patients$ = this.patients.asObservable();

  // Service message commands
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiHost}`);

  }

  // patientById(id: number):  Observable<Patient[]> {
  //   return of('abc');
  // }


}
