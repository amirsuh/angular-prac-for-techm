import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dompurify } from './dompurify';

describe('Dompurify', () => {
  let component: Dompurify;
  let fixture: ComponentFixture<Dompurify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dompurify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dompurify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
