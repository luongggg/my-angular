import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-homeProducts',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeProductsComponent {
  products:any=''
  constructor(private pro:ProductsService, private router:Router){
    this.pro.getproducts().subscribe((data:any)=>{
     this.products= data 
     console.log(this.products);
    })
  }
  del(id:any){
console.log(id);
this.pro.dele(id).subscribe(data=>{
  alert('bạn xóa thành công')
  data= this.products.filter((item:any)=>item.id!=id)
   return this.router.navigateByUrl('admin')
})

  }
}
