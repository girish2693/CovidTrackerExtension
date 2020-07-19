import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStateComponent } from './covid-state.component';

describe('CovidStateComponent', () => {
  let component: CovidStateComponent;
  let fixture: ComponentFixture<CovidStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
