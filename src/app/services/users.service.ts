import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api="http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(_api)
  }
}
