import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsaddComponent } from './reservationsadd.component';

describe('ReservationsaddComponent', () => {
  let component: ReservationsaddComponent;
  let fixture: ComponentFixture<ReservationsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
