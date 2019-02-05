import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsdetailsComponent } from './patientsdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientsdetailsComponent', () => {
  let component: PatientsdetailsComponent;
  let fixture: ComponentFixture<PatientsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsdetailsComponent ],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsdetailsComponent);
    component = fixture.componentInstance;
    component.patientDetail = {
      'Id': 1,
      'Name': 'Leaf Rake',
      'Age': 11,
      'Doctor': 'Akshay',
      'Address': 'Bandra',
      'IsNormal': 'Normal',
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
