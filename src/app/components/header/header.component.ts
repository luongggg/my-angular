import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  products:any= '';
  
  constructor(private pro: ProductsService) {
    this.pro.getproducts().subscribe((data:any) => {
      // Assuming data is an array of objects with a 'name' property
      this.products = data as any[];
  
      // Iterate over each product and log its name
      // for (const product of this.products) {
      //   console.log(product.name as any);
      // }
    });
  }
}
