import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSquareComponent } from './svg-square.component';

describe('SvgSquareComponent', () => {
  let component: SvgSquareComponent;
  let fixture: ComponentFixture<SvgSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
