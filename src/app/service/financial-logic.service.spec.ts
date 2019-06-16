import { TestBed } from '@angular/core/testing';

import { FinancialLogicService } from './financial-logic.service';

describe('FinancialLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialLogicService = TestBed.get(FinancialLogicService);
    expect(service).toBeTruthy();
  });
});
