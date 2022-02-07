import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user:User = new User();
  msg='';
  constructor(private _service : RegistrationService, private _router:Router) { }

  ngOnInit(){
  }
  loginUser(){
  this._service.loginUserFromRemote(this.user).subscribe(
  data => {
    console.log("response recieved");
    this._router.navigate(['/listar'])
},
  error => {
    console.log("response occured");
    this.msg="mal credenciales, porfavor ingrese bien el email o password";
  }
  )
  console.log(this.user)

  }
  gotoregistration(){

    this._router.navigate(['/registration'])
  }
  User(user: any) {
    throw new Error('Method not implemented.');
  }

}
