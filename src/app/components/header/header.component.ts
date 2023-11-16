import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  products: any = '';
  carrt: any = [];
  soluong: any = '';

  constructor(private pro: ProductsService, private cart: CartService) {
    this.cart.getCart().subscribe(data => {
      this.carrt = data;
      this.carrt.forEach((data: any) => {
        
        this.soluong = this.Localstora()?.user.id === data.userid ? this.Localstora()?.user.id : 'Not Match';
        
        
      })
     
      const a = this.carrt.filter((data: any) => data.userid === this.soluong)
      this.carrt = a.length
      console.log(this.carrt);
      
      
    });
    
  }

  Localstora() {
    if (!localStorage.getItem('token')) return null;
    else return JSON.parse(localStorage.getItem('token') as string);
  }
}
