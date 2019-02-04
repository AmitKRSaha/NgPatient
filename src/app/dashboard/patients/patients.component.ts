import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patientDetails: boolean;
  constructor() { }

  ngOnInit() {
    this.patientDetails = false;
  }

  openPatientDetails() {
    this.patientDetails = true;
  }

}
