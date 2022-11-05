import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';

@Component({
  selector: 'an-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {}
    useremail = "";
    userpassword = "";
    requestDataOnDB():void{
      alert('Text changed to' + this.useremail + this.userpassword)
      let user = {
        email:this.useremail,
        password: this.userpassword
      }
      this.taskservice.loginUserData(user);
    }
 
}
