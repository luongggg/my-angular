import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.css']
})
export class GirlComponent {
  products:any[]=[]
  girl:any[]=[]
  onclick:any=''
  gucci:any=''
  doir:any=''
  constructor(private pro:ProductsService){
    this.pro.getproducts().subscribe((data:any)=>{
      console.log(data);
      this.products= data as any[];
      this.girl= this.products.filter(item=>item.idsex==='nu')/// lọc lấy tất cả sản phẩm nữ
      this.gucci= this.girl.filter(item=>item.idcategory==='gucci')///lấy tất cả sản phẩm của gucci trong girl
      this.doir= this.girl.filter(item=>item.idcategory==='doir')/// lấy tất cả sản phẩm doir trong girl;
      
    })
  }
  sanphamht:number = 4
  trang:number=0///số trang hiện tại

  ///// phân trang tất cả sản phẩm girl
  
  get totalPages1():number[]{
    const soluong= this.girl.length
    const sotrang= Math.ceil(soluong/this.sanphamht)
    return Array(sotrang).fill(0).map((x,i)=>i)
  }
  get productsGirl(){
    const startindex= this.trang*this.sanphamht
    const endindex1= this.trang+this.sanphamht
    console.log(this.girl.slice(startindex,endindex1));
    return this.girl.slice(startindex,endindex1)
  }
   changgirl(pages:number){
    this.trang= pages
  }
  ///// phân trang của gucci
  get totalPages2():number[]{
 const soluong1= this.girl.length
 const sotrang1= Math.ceil(soluong1/this.sanphamht)
 return Array(sotrang1).fill(0).map((x,i)=>i)
  }
  get productsGucci():any[]{
    const startindex1= this.trang*this.sanphamht
    const endindex1= this.trang+this.sanphamht
    return this.gucci.slice(startindex1, endindex1)
  }
  changgucci(pages:number){
    this.trang= pages
  }
  /// phân trang doir
  get totalPages3():number[]{
    const soluong2= this.doir.length
    const sotrang2= Math.ceil(soluong2/this.sanphamht)
    return Array(sotrang2).fill(0).map((x,i)=>i)
  }
  get productsDoir():any[] {
    const startindex3= this.sanphamht*this.trang
    const endindex3= this.sanphamht+this.trang
    return this.doir.slice(startindex3, endindex3)
  }


  changdoir(pages:number){
    this.trang= pages
  }

}
