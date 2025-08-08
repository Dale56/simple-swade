import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgesEtcComponent } from './edges-etc.component';

describe('EdgesEtcComponent', () => {
  let component: EdgesEtcComponent;
  let fixture: ComponentFixture<EdgesEtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdgesEtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdgesEtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
