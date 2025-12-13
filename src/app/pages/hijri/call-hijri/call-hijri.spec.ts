import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHijri } from './call-hijri';

describe('CallHijri', () => {
  let component: CallHijri;
  let fixture: ComponentFixture<CallHijri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallHijri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallHijri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
