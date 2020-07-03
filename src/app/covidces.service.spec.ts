import { TestBed } from '@angular/core/testing';

import { CovidcesService } from './covidces.service';

describe('CovidcesService', () => {
  let service: CovidcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
