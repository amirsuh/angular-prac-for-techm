import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hparent } from './hparent';

describe('Hparent', () => {
  let component: Hparent;
  let fixture: ComponentFixture<Hparent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hparent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hparent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
