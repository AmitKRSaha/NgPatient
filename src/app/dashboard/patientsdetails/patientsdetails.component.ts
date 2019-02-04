import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patientsdetails',
  templateUrl: './patientsdetails.component.html',
  styleUrls: ['./patientsdetails.component.scss']
})
export class PatientsdetailsComponent implements OnInit {

  id: string;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    //  this.patientService.missionAnnounced$.subscribe(x => this.id = x);
  }

}
