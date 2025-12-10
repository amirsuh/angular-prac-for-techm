import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debounceusingrxjs } from './debounceusingrxjs';

describe('Debounceusingrxjs', () => {
  let component: Debounceusingrxjs;
  let fixture: ComponentFixture<Debounceusingrxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Debounceusingrxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debounceusingrxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
