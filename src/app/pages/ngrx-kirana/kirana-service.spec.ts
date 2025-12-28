import { TestBed } from '@angular/core/testing';

import { KiranaService } from './kirana-service';

describe('KiranaService', () => {
  let service: KiranaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiranaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
