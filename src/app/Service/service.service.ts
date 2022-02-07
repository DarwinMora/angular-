import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='Http://localhost:8080/ejemplo01/personas';
  getPersonas(){
    return this.http.get<User[]>(this.Url);
  }
}
