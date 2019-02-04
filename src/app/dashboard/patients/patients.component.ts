import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patientDetails: boolean;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientDetails = false;
  }

  openPatientDetails(value) {
    this.patientDetails = true;
    this.patientService.patientById(value);
  }

}
