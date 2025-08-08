import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceBoxD10Component } from './dice-box-d10.component';

describe('DiceBoxD10Component', () => {
  let component: DiceBoxD10Component;
  let fixture: ComponentFixture<DiceBoxD10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceBoxD10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceBoxD10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
