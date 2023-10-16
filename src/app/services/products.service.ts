import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const _api="http://localhost:3000/products"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private pro:HttpClient) { }
 
  getproducts():any{
    return this.pro.get(_api)
  }
  getProductsId(id:string){
    return this.pro.get(`${_api}/${id}`)
  }
  dele(id:number){
    return this.pro.delete(`${_api}/${id}`)
  }
  Addproducts(body:any){
    return this.pro.post(`${_api}`, body)
  }
  updateProduct(id:string, body:any){
  return this.pro.put(`${_api}/${id}`,body)
  }
  getProductsSex(idsex:any) { //lấy id  của tất cả sản phẩm giới tính

    
    return this.pro.get<any[]>(`${_api}/?idsex=${idsex}`);
  }
  getProductscategories(idcategory:string){// lấy id của theo loại sản phẩm
    return this.pro.get<any[]>(`${_api}/?idcategory=${idcategory}`);
  }
  
}
