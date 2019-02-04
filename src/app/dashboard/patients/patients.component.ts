import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: string[];
  patientDetails: boolean;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientDetails = false;
    this.patients = [ 'Amit', 'Kumar', 'Saha'];
  }

  openPatientDetails(value) {
    this.patientDetails = true;
    this.patientService.patientById(value);
  }

}
