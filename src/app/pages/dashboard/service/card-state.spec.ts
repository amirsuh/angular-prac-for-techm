import { TestBed } from '@angular/core/testing';

import { CardState } from './card-state';

describe('CardState', () => {
  let service: CardState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
