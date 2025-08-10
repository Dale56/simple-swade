import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponRowComponent } from './weapon-row.component';

describe('WeaponRowComponent', () => {
  let component: WeaponRowComponent;
  let fixture: ComponentFixture<WeaponRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
