import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Closures } from './closures';

describe('Closures', () => {
  let component: Closures;
  let fixture: ComponentFixture<Closures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Closures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Closures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
