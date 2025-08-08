import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTriangleDoubleD8Component } from './svg-triangle-double-d8.component';

describe('SvgTriangleDoubleD8Component', () => {
  let component: SvgTriangleDoubleD8Component;
  let fixture: ComponentFixture<SvgTriangleDoubleD8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTriangleDoubleD8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTriangleDoubleD8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
