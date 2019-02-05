import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient';

@Component({
  selector: 'app-patientsdetails',
  templateUrl: './patientsdetails.component.html',
  styleUrls: ['./patientsdetails.component.scss']
})
export class PatientsdetailsComponent implements OnInit {

  @Input() patientDetail: Patient;
  constructor(public patientService: PatientService) { }

  ngOnInit() {
  }

}
