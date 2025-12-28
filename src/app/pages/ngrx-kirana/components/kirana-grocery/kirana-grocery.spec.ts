import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaGrocery } from './kirana-grocery';

describe('KiranaGrocery', () => {
  let component: KiranaGrocery;
  let fixture: ComponentFixture<KiranaGrocery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiranaGrocery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiranaGrocery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
