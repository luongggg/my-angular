import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api="http://localhost:3000/Contact"
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  postcontact(body:any){
    return this.http.post(_api, body)
  }
}
