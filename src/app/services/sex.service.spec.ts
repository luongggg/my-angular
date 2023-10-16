import { TestBed } from '@angular/core/testing';

import { SexService } from './sex.service';

describe('SexService', () => {
  let service: SexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
