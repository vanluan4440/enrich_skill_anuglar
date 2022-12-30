import { TestBed } from '@angular/core/testing';

import { AllFunctionsService } from './all-functions.service';

describe('AllFunctionsService', () => {
  let service: AllFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
