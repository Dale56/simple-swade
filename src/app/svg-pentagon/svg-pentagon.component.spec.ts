import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPentagonComponent } from './svg-pentagon.component';

describe('SvgPentagonComponent', () => {
  let component: SvgPentagonComponent;
  let fixture: ComponentFixture<SvgPentagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgPentagonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgPentagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
