import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTotalComponent } from './covid-total.component';

describe('CovidTotalComponent', () => {
  let component: CovidTotalComponent;
  let fixture: ComponentFixture<CovidTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
