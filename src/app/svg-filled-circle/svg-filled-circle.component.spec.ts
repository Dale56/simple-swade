import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFilledCircleComponent } from './svg-filled-circle.component';

describe('SvgFilledCircleComponent', () => {
  let component: SvgFilledCircleComponent;
  let fixture: ComponentFixture<SvgFilledCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgFilledCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFilledCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
