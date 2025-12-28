import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaBucket } from './kirana-bucket';

describe('KiranaBucket', () => {
  let component: KiranaBucket;
  let fixture: ComponentFixture<KiranaBucket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiranaBucket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiranaBucket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
