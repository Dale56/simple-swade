import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameStatsComponent } from './name-stats.component';

describe('NameStatsComponent', () => {
  let component: NameStatsComponent;
  let fixture: ComponentFixture<NameStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
