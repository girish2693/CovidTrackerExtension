import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDistrictComponent } from './covid-district.component';

describe('CovidDistrictComponent', () => {
  let component: CovidDistrictComponent;
  let fixture: ComponentFixture<CovidDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
