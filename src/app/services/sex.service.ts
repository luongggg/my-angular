import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api="http://localhost:3000/sex"
@Injectable({
  providedIn: 'root'
})
export class SexService {

  constructor(private http:HttpClient) { }
  getsex(){
    return this.http.get(_api)
  }
}
