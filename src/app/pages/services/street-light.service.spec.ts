import { TestBed } from '@angular/core/testing';

import { StreetLightService } from './street-light.service';

describe('StreetLightService', () => {
  let service: StreetLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreetLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
