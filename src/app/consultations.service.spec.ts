import { TestBed } from '@angular/core/testing';

import { ConsultationService } from './consultation.service';

describe('ConsultationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultationService = TestBed.get(ConsultationService);
    expect(service).toBeTruthy();
  });
});
