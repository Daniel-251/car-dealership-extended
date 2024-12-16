import { TestBed } from '@angular/core/testing';

import { CarDealershipService } from './car-dealership.service';

describe('CarDealershipService', () => {
  let service: CarDealershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDealershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
