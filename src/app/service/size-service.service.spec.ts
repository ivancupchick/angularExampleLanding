import { TestBed } from '@angular/core/testing';

import { SizeServiceService } from './size-service.service';

describe('SizeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeServiceService = TestBed.get(SizeServiceService);
    expect(service).toBeTruthy();
  });
});
