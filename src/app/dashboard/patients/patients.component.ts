import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: any[];
  detailsView: boolean;
  patientDetail: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.detailsView = false;
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
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

}
