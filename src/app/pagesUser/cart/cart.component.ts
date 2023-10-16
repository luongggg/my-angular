import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartt:any=''
constructor(private cart: CartService){
  this.cart.getCart().subscribe(data =>
    this.cartt= data,
    
    
  )
  console.log(this.cart)
}
}
