import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hchild } from './hchild';

describe('Hchild', () => {
  let component: Hchild;
  let fixture: ComponentFixture<Hchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
