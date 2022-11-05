import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseraddComponent } from './useradd/useradd.component';
import { UserallComponent } from './userall/userall.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReservationsaddComponent } from './reservationsadd/reservationsadd.component';
import { ReservationsallComponent } from './reservationsall/reservationsall.component';

const routes: Routes = [
  {path: 'LinkUserall', component:UserallComponent},
  {path: 'LinkUseradd', component:UseraddComponent},
  {path: 'LinkUserlogin', component:UserloginComponent},
  {path: 'LinkReservationsadd', component:ReservationsaddComponent},
  {path: 'LinkReservationsall', component:ReservationsallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
