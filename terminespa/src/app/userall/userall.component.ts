import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';

@Component({
  selector: 'an-userall',
  templateUrl: './userall.component.html',
  styleUrls: ['./userall.component.css']
})
export class UserallComponent implements OnInit {

  public users: any;
  constructor(private taskservice: TaskService) {}
  ngOnInit() {
  this.taskservice.getUserData().subscribe(
  data => { this.users = data },
  err => console.log(err),
  () => console.log('loading done.')
  );
  }

}
