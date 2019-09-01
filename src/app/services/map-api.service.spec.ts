import { TestBed } from '@angular/core/testing';

import { MapAPIService } from './map-api.service';

describe('MapAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapAPIService = TestBed.get(MapAPIService);
    expect(service).toBeTruthy();
  });
});
