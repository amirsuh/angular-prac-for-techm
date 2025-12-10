import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domsanitize } from './domsanitize';

describe('Domsanitize', () => {
  let component: Domsanitize;
  let fixture: ComponentFixture<Domsanitize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Domsanitize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domsanitize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
