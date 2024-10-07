import { TestBed } from '@angular/core/testing';

import { DoctoresSeviceService } from './doctores-sevice.service';

describe('DoctoresSeviceService', () => {
  let service: DoctoresSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctoresSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
