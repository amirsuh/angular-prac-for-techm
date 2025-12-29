import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardContent } from './feature-card-content';

describe('FeatureCardContent', () => {
  let component: FeatureCardContent;
  let fixture: ComponentFixture<FeatureCardContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
