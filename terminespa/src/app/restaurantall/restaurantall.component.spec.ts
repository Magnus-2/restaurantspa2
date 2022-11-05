import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantallComponent } from './restaurantall.component';

describe('RestaurantallComponent', () => {
  let component: RestaurantallComponent;
  let fixture: ComponentFixture<RestaurantallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
