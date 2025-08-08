import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTriangleComponent } from './svg-triangle.component';

describe('SvgTriangleComponent', () => {
  let component: SvgTriangleComponent;
  let fixture: ComponentFixture<SvgTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTriangleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
