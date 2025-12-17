import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsonplaceholderapi } from './jsonplaceholderapi';

describe('Jsonplaceholderapi', () => {
  let component: Jsonplaceholderapi;
  let fixture: ComponentFixture<Jsonplaceholderapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jsonplaceholderapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jsonplaceholderapi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
