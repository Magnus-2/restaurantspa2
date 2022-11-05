import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsallComponent } from './reservationsall.component';

describe('ReservationsallComponent', () => {
  let component: ReservationsallComponent;
  let fixture: ComponentFixture<ReservationsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
