import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api= "http://localhost:3000/category"
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategory(){
    return this.http.get(`${_api}`)
  }
}
