import { Injectable } from '@angular/core';
import { Subject, Observable, of   } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Patient } from './patient';
import { pipe } from '@angular/core/src/render3';
import { PatientsComponent } from '../patients/patients.component';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient) { }

  // Observable string sources
  private patients = new Subject<Patient>();
  private apiHost = '../../../assets/patient-detail.json';
  private patientdetail: Patient[];

  // Observable string streams
  patients$ = this.patients.asObservable();

  // Service message commands
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiHost}`);

  }

  patientById(patient: Patient[], id: number):  any {
    for (let i = 0 ; i < patient.length; i++) {
      if (patient[i]['Id'] === id) {
        return this.patients.next(patient[i]);
      }
    }
  }


}
