import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api="http://localhost:3000/comments"
@Injectable({
  providedIn: 'root'
})
export class BinhluanService {

  constructor(private http:HttpClient) {
   }
   postcomment(body:any){
      return this.http.post(_api,body)
   }
   getcommentId(id:string){
    return this.http.get(`${_api}?productsId=${id}`)
   }
}
