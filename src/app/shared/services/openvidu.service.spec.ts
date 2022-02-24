import { TestBed, inject } from '@angular/core/testing';

import { OpenViduService } from './openvidu.service';

describe('OpenViduService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenViduService]
    });
  });

  it('should be created', inject([OpenViduService], (service: OpenViduService) => {
    expect(service).toBeTruthy();
  }));
});
