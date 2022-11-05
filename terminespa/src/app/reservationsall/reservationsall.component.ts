import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';

@Component({
  selector: 'an-reservationsall',
  templateUrl: './reservationsall.component.html',
  styleUrls: ['./reservationsall.component.css']
})
export class ReservationsallComponent implements OnInit {

  public reservation: any;
  constructor(private taskservice: TaskService) {}
  ngOnInit() {
  this.taskservice.getReservationsData().subscribe(
  data => { this.reservation = data },
  err => console.log(err),
  () => console.log('loading done.')
  );
  }

}
