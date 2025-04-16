import { TestBed } from '@angular/core/testing';

import { GlobalVariableService } from './global-variable.service';

describe('GlobalVariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalVariableService = TestBed.get(GlobalVariableService);
    expect(service).toBeTruthy();
  });
});
