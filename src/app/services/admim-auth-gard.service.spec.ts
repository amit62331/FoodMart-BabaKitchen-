import { TestBed, inject } from '@angular/core/testing';

import { AdmimAuthGardService } from './admim-auth-gard.service';

describe('AdmimAuthGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmimAuthGardService]
    });
  });

  it('should be created', inject([AdmimAuthGardService], (service: AdmimAuthGardService) => {
    expect(service).toBeTruthy();
  }));
});
