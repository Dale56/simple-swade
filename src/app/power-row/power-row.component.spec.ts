import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerRowComponent } from './power-row.component';

describe('PowerRowComponent', () => {
  let component: PowerRowComponent;
  let fixture: ComponentFixture<PowerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
