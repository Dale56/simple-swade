import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieBoxComponent } from './die-box.component';

describe('DieBoxComponent', () => {
  let component: DieBoxComponent;
  let fixture: ComponentFixture<DieBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
