import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compneedtooptimized } from './compneedtooptimized';

describe('Compneedtooptimized', () => {
  let component: Compneedtooptimized;
  let fixture: ComponentFixture<Compneedtooptimized>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compneedtooptimized]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compneedtooptimized);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
