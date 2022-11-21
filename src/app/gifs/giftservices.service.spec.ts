import { TestBed } from '@angular/core/testing';

import { GiftservicesService } from './services/giftservices.service';

describe('GiftservicesService', () => {
  let service: GiftservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
