import { TestBed } from '@angular/core/testing';

import { StatesvService } from './statesv.service';

describe('StatesvService', () => {
  let service: StatesvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
