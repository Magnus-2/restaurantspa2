import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'an-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
//Hier wird die get methode von task-serve aufgerufen
  constructor(private taskservice: TaskService) { }
  ngOnInit() { }
  userfirstname = '';
  userlastname = '';
  useremail = '';
  userphonenumber = '';
  userpassword = '';
  // taskpriority = '';
  public RegisterForm: FormGroup = new FormGroup({
    firstname: new FormControl('',[
      Validators.required
    ]),
    lastname : new FormControl('',[
      Validators.required
    ]),
    phonenumber: new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
    
    });
  storeDataOnDB(): void {
  alert('Text changed to' + this.userfirstname + this.userlastname + this.useremail + this.userphonenumber + this.userpassword);
  let user = {
  firstName: this.userfirstname,
  lastName: this.userlastname,
  email: this.useremail,
  phoneNumber: this.userphonenumber,
  password : this.userpassword
  // priority: parseInt(this.taskpriority)
  };
  this.taskservice.addUserData(user);
  }

}
