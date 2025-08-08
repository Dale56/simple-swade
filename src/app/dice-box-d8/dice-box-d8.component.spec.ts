import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBoxD8Component } from './dice-box-d8.component';

describe('DiceBoxD8Component', () => {
  let component: DiceBoxD8Component;
  let fixture: ComponentFixture<DiceBoxD8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceBoxD8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceBoxD8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
