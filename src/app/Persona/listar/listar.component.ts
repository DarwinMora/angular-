import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  user:User = new User();
  msg='';
  constructor(private _service:RegistrationService, private _router:Router) {
  }

  ngOnInit() {
  this._service.fetchUserListFromRemote().subscribe(
    data=>console.log("response recived"),
    error=>console.log("exception occured"),

  )



  }

}
