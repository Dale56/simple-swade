import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieLineComponent } from './die-line.component';

describe('DieLineComponent', () => {
  let component: DieLineComponent;
  let fixture: ComponentFixture<DieLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
