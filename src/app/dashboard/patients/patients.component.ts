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
  patientDetails: boolean;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientDetails = false;
    this.patientService.getPatients().subscribe(data => {this.patients = data; });
  }

  openPatientDetails(value) {
    this.patientDetails = true;
    // this.patientService.patientById(value);
  }

}
