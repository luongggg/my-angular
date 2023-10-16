import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any[] = [];   // Mảng lưu dữ liệu sản phẩm
  itemsPerPage: number = 4;  // Số sản phẩm mỗi trang
  currentPage: number = 0;   // Trang hiện tại
  gucci: any[]=[]
  doir:any[]=[]
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getproducts().subscribe((data:any) => {
      this.product = data as any[];
      console.log(this.product);
      this.gucci = this.product.filter(item => item.idcategory === 'gucci'), []
      console.log(this.gucci);
      this.doir= this.product.filter(item => item.idcategory === 'doir')
      console.log(this.doir);
      

    });
  }

  // Tính tổng số trang dựa trên số lượng sản phẩm và số sản phẩm mỗi trang gucci
  get totalPages(): number[] {
    const totalProducts = this.gucci.length;  // Số lượng sản phẩm
    const pages = Math.ceil(totalProducts / this.itemsPerPage); // Số trang
    return Array(pages).fill(0).map((x, i) => i); // Mảng số trang
  }

  // Lấy sản phẩm cho trang hiện tại gucci
  get productsgucci(): any[] {
    const startIndex = this.currentPage * this.itemsPerPage; // Vị trí bắt đầu lấy sản phẩm
    const endIndex = startIndex + this.itemsPerPage; // Vị trí kết thúc lấy sản phẩm
    return this.gucci.slice(startIndex, endIndex) // Trả về các sản phẩm cho trang hiện tại
  }


  // Thay đổi trang
  changePage(page: number) {
    this.currentPage = page; // Cập nhật trang hiện tại khi người dùng chọn trang khác
  }


/// phân trang doir

get totalPagesdoir():number[]{
  const sodong= this.doir.length;
  const sotrang3=Math.ceil(sodong/this.itemsPerPage);
  return Array(sotrang3).fill(0).map((x, i) =>i)
}
get pagesProductsDoir():any{
  const startIndex3= this.itemsPerPage*this.currentPage
  const endIndex3= this.itemsPerPage+this.currentPage
  return this.doir.slice(startIndex3, endIndex3)
}
changdoir(pages: number){
  this.currentPage=pages
}


}
