import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: any[];
  detailsView: boolean;
  patientDetail: Patient;
  login_Name: string;
  private paramsSubscription: Subscription;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.detailsView = false;
    this.paramsSubscription = this.patientService.getPatients().subscribe(data => {
      this.patients = data;
      this.login_Name = localStorage.getItem('name');

    });
  }

  openPatientDetails(value) {
    this.detailsView = true;

    // this.patientService.patientById(this.patients, value.Id);
    for (let i = 0 ; i < this.patients.length; i++) {
      if (this.patients[i]['Id'] === value.Id) {
        this.patientDetail = (this.patients[i]);
      }
    }
  }

  OnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
