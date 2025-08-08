import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputBoxUnderlineComponent } from './custom-input-box-underline.component';

describe('CustomInputBoxUnderlineComponent', () => {
  let component: CustomInputBoxUnderlineComponent;
  let fixture: ComponentFixture<CustomInputBoxUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputBoxUnderlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputBoxUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
