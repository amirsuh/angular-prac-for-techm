import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compneedtooptimize } from './compneedtooptimize';

describe('Compneedtooptimize', () => {
  let component: Compneedtooptimize;
  let fixture: ComponentFixture<Compneedtooptimize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compneedtooptimize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compneedtooptimize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
