import { TestBed, inject } from '@angular/core/testing';

import { GetBloodService } from './get-blood.service';

describe('GetBloodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBloodService]
    });
  });

  it('should be created', inject([GetBloodService], (service: GetBloodService) => {
    expect(service).toBeTruthy();
  }));
});
