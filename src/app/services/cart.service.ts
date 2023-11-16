import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const _api = "http://localhost:3000/cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }




  // Phương thức để thêm sản phẩm vào giỏ hàng của một người dùng
  addToCart(body:any){
  
      
     return this.http.post(_api,body)
  }


 



getLocalstorage() {
  if (!localStorage.getItem('token')) return null; // kiểm tra nếu localStorage rỗng thì sẽ trả về giá trị null
  else return JSON.parse(localStorage.getItem('token') as string) //kiểm tra nếu localStorage có dữ liệu thì sẽ trả về dữ liệu
}
getCart(){
  return this.http.get(`${_api}`)
}

}
