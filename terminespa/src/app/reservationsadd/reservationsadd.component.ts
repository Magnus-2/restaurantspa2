import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';


@Component({
  selector: 'an-reservationsadd',
  templateUrl: './reservationsadd.component.html',
  styleUrls: ['./reservationsadd.component.css']
})
export class ReservationsaddComponent implements OnInit {

  constructor(private taskservice: TaskService) { }
  ngOnInit() { }
  reservationsdate = '';
  reservationstime = '';
  restaurantSeats = '';
  restaurantname = '';
  // taskpriority = '';
  storeDataOnDB(): void {
  alert('Text changed to' + this.reservationsdate + this.reservationstime + this.restaurantSeats + this.restaurantname);
  let reservations = {
  date: this.reservationsdate,
  time: this.reservationstime,
  rSeats:  parseInt(this.restaurantSeats),
  rName: this.restaurantname
  // priority: parseInt(this.taskpriority)
  };
  this.taskservice.addReservationsData(reservations);
  }
}
