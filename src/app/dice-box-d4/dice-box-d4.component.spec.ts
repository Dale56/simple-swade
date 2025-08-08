import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBoxD4Component } from './dice-box-d4.component';

describe('DiceBoxD4Component', () => {
  let component: DiceBoxD4Component;
  let fixture: ComponentFixture<DiceBoxD4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceBoxD4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceBoxD4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
