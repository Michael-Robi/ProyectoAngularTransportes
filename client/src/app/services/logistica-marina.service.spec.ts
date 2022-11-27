import { TestBed } from '@angular/core/testing';

import { LogisticaMarinaService } from './logistica-marina.service';

describe('LogisticaMarinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogisticaMarinaService = TestBed.get(LogisticaMarinaService);
    expect(service).toBeTruthy();
  });
});
