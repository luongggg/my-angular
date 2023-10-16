import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

  const _api = "http://localhost:3000"
  @Injectable({
    providedIn: 'root'
  })
export class AuthService {


constructor(private http: HttpClient) {

   // Set it to an appropriate initial value
}
  
login(body: any): Observable<any> {
  return this.http.post<any>(`${_api}/login`, body)
}

  
  register(body:any[]) {
    return this.http.post(`${_api}/register`, body)
  }
  savelogin(token:string):any {
   
    return localStorage.setItem('token', JSON.stringify(token))

  }
  // saveUser(body:any):any {
  
  //    return localStorage.setItem('user',body)
 
  //  }
  // getToken(): string | null {
  //  return localStorage.getItem('token');
  // }
  // getUser(): string | null {
  //   return localStorage.getItem('user');
  //  }
 

}
