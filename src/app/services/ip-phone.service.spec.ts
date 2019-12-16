import { TestBed } from '@angular/core/testing';

import { IpPhoneService } from './ip-phone.service';

describe('IpPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpPhoneService = TestBed.get(IpPhoneService);
    expect(service).toBeTruthy();
  });
});
