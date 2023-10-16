import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  gucci: any[] = []
  doir: any = []
  selectedProduct: any = ''
  products: any;
  category: any
  search:any=''

  // search products
 get searchproducts():any[]{
  return this.products.filter((product: { name: string; })=>{
    return product.name.toLowerCase().includes(this.search.toLowerCase())
  })
 }

  


    //trang
    sanpham: number = 3// san pham moi trang
    trang: number = 0 //trang hiện tại


  // phân trang cho tất cả sản phẩm
  get totalPages(): number[]{
      const soluong = this.products.length;
      const sotrang = Math.ceil(soluong / this.sanpham)
     
      return Array(sotrang).fill(0).map((x, i) => i)
    }
  get productssanpham(): any[]{
      const startindex = this.trang * this.sanpham
      const endindex = this.trang + this.sanpham
      return this.products.slice(startindex, endindex)
    }
    changePage(page: number){
      this.trang = page
      console.log(this.productssanpham);
    }
  ////
//// phân trang của trang gucci
get totalPagesgucci(): any[] {
      const soluongs = this.gucci.length
      const sotrang1 = Math.ceil(soluongs / this.sanpham)
      console.log(sotrang1);
      return Array(sotrang1).fill(0).map((x, i) => i)

    }
get productsgucci(): any[] {
      const startIndex1 = this.trang * this.sanpham
      const endindex1 = this.trang + this.sanpham
      return this.gucci.slice(startIndex1, endindex1)
    }
    changongucci(pages: number) {
      this.trang = pages
    }
///phân trang của sản phẩm doir
get totalPagesdoir(): any[]{
      const soluongss = this.doir.length
      const sotrang2 = Math.ceil(soluongss / this.sanpham)
      return Array(sotrang2).fill(0).map((x, i) => i)
    }
get productsdoir(): any[]{
      const startIndex2 = this.sanpham * this.trang
      const endIndex2 = this.sanpham + this.trang
      return this.doir.slice(startIndex2, endIndex2)
    }

    changdoir(pagess: number){
      this.trang = pagess
    }


    /////
    constructor(private route: ActivatedRoute, private pro: ProductsService) {
      this.route.paramMap.subscribe(params => {
   

        this.category = params.get('idsex');// lấy ra id của giới tính
        console.log(this.category);

        this.pro.getProductsSex(this.category)
          .subscribe(products => {
            this.products = products;
            this.gucci = this.products.filter((product: any) => product.idcategory === 'gucci')// lấy sản phẩm nam của gucci
            this.doir = this.products.filter((product: any) => product.idcategory === 'doir')// lấy sản phẩm nam của doir
       


          });
      });



    }
  }
