import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user:User =new User();
    msg='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }
  registerUser(){
  this._service.registerUserFromRemote(this.user).subscribe(
  data =>{
  console.log("response recieved");
  this._router.navigate(['login'])
  },
  error =>{
    console.log("exception occured");
    this.msg=error.error;
  }

)
console.log(this.user)

  }
  gotologin(){

    this._router.navigate(['/login'])
  }
  User(user: any) {
    throw new Error('Method not implemented.');
  }

}
