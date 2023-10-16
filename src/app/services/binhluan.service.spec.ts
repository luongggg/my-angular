import { TestBed } from '@angular/core/testing';

import { BinhluanService } from './binhluan.service';

describe('BinhluanService', () => {
  let service: BinhluanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinhluanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
