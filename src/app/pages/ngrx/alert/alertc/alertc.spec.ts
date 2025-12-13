import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alertc } from './alertc';

describe('Alertc', () => {
  let component: Alertc;
  let fixture: ComponentFixture<Alertc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alertc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alertc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
