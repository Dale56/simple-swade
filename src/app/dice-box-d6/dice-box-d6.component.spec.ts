import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBoxD6Component } from './dice-box-d6.component';

describe('DiceBoxD6Component', () => {
  let component: DiceBoxD6Component;
  let fixture: ComponentFixture<DiceBoxD6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceBoxD6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceBoxD6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
