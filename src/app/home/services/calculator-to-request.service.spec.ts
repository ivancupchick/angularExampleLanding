import { TestBed } from '@angular/core/testing';

import { CalculatorToRequestService } from './calculator-to-request.service';

describe('CalculatorToRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorToRequestService = TestBed.get(CalculatorToRequestService);
    expect(service).toBeTruthy();
  });
});
