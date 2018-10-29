import { TestBed, inject } from '@angular/core/testing';

import { RantService } from './rant.service';

describe('RantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RantService]
    });
  });

  it('should be created', inject([RantService], (service: RantService) => {
    expect(service).toBeTruthy();
  }));
});
