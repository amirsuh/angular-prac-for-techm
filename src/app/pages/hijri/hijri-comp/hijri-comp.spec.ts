import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijriComp } from './hijri-comp';

describe('HijriComp', () => {
  let component: HijriComp;
  let fixture: ComponentFixture<HijriComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijriComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijriComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
