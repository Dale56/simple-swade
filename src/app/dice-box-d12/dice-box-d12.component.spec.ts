import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBoxD12Component } from './dice-box-d12.component';

describe('DiceBoxD12Component', () => {
  let component: DiceBoxD12Component;
  let fixture: ComponentFixture<DiceBoxD12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceBoxD12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceBoxD12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
