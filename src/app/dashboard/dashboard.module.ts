import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { PatientsdetailsComponent } from './patientsdetails/patientsdetails.component';

@NgModule({
  declarations: [PatientsComponent, PatientsdetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  bootstrap: [PatientsComponent]
})
export class DashboardModule { }
