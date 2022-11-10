import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserallComponent } from './userall/userall.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task-service';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RestaurantaddComponent } from './restaurantadd/restaurantadd.component';
import { RestaurantallComponent } from './restaurantall/restaurantall.component';
import { RestaurantloginComponent } from './restaurantlogin/restaurantlogin.component';
import { ReservationsaddComponent } from './reservationsadd/reservationsadd.component';
import { ReservationsallComponent } from './reservationsall/reservationsall.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UseraddComponent,
    UserallComponent,
    UserloginComponent,
    RestaurantaddComponent,
    RestaurantallComponent,
    RestaurantloginComponent,
    ReservationsaddComponent,
    ReservationsallComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
