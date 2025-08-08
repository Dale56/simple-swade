import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTriangleDoubleD10Component } from './svg-triangle-double-d10.component';

describe('SvgTriangleDoubleD10Component', () => {
  let component: SvgTriangleDoubleD10Component;
  let fixture: ComponentFixture<SvgTriangleDoubleD10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTriangleDoubleD10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTriangleDoubleD10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
