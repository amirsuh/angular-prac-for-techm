import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTs } from './learn-ts';

describe('LearnTs', () => {
  let component: LearnTs;
  let fixture: ComponentFixture<LearnTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
