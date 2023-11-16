import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartt: any = ''
  iduser: number | undefined
  constructor(private cart: CartService) {
    this.cart.getCart().subscribe((data): any => {
      this.cartt = data
    
      this.cartt.forEach((item: any, index: any) => {
        // Thiết lập giá trị user.id cho mỗi phần tử của this.cartt
        const usercart = this.Localstora().user.id = item.userid;

        this.iduser = usercart
      });
      const a = this.cartt.filter((data: any) => data.userid === this.iduser)
      this.cartt = a
    }
    )
    console.log();


    console.log(this.cartt.userid);



  }
  NgOnInit() {


  }
  Localstora() {
    if (!localStorage.getItem('token')) return null
    else return JSON.parse(localStorage.getItem('token') as string)
  }



}
