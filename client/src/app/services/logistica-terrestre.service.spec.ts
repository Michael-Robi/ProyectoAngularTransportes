import { TestBed } from '@angular/core/testing';

import { LogisticaTerrestreService } from './logistica-terrestre.service';

describe('LogisticaTerrestreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogisticaTerrestreService = TestBed.get(LogisticaTerrestreService);
    expect(service).toBeTruthy();
  });
});
