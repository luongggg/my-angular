import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../auth/register/register.component';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BinhluanService } from 'src/app/services/binhluan.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [LoginComponent, RegisterComponent]
})
export class DetailComponent {
  soluong!: UntypedFormGroup
  productsdetail: any = []  // Initialize as an empty array
  products: any[] = []; // Initialize
  sanphamchay: number = 0/// sản phẩm chạy hiện tại
  detai: any = ''
  binh_luan: any = ''
  // postdetail: any = []


  constructor(private router: Router, private pro: ProductsService, private commentt: BinhluanService, private giohang: CartService, private fb: UntypedFormBuilder, private http: ActivatedRoute, private login: LoginComponent,) {
    this.soluong = new UntypedFormGroup({
      soluong: new UntypedFormControl()
    });
    this.http.params.subscribe(({ id }) => {
      this.pro.getProductsId(id).subscribe(data => {
        this.detai = data as any
        console.log(this.detai);
        console.log(this.soluong);





        //binh luan
        // laays taats ca comment theo id
    
        
        this.commentt.getcommentId(this.detai.id).subscribe((data: any) => {
          this.binh_luan = data as any          
          this.binh_luan.sort((a: any, b: any) => b.id - a.id)
      

        })




      });

    });
    this.pro.getproducts().subscribe((data: any) => {
      this.products = data as any
    })
  }


  ///tạo nút để show sản phẩm
  get currentProduct() {
    return this.products.slice(this.sanphamchay, this.sanphamchay + 3);;
  }
  truoc() {
    this.sanphamchay += 3;
  }
  sau() {
    this.sanphamchay = Math.max(0, this.sanphamchay - 3);

  }

  NgOnInit(): any {
    this.onComment()
    // số lượng validate giỏ hàng
    this.soluong = this.fb.group({
      soluong: [1, Validators.required, Validators.min(1)]
    })



  }




  cart() {


    if (localStorage.getItem('token')) {
      // Lấy sản phẩm đầu tiên trong this.productsdetail
      const soluong = this.soluong.value.soluong
      // Lấy id người dùng từ local storage
      const userid = this.getLocalstorage()?.user.id || '';
      const mergedArray = { ...this.detai, userid, soluong }
      console.log(mergedArray.id);
      
     this.giohang.addToCart(mergedArray)
     this.giohang.addToCart(mergedArray).subscribe(data=>{ 
    const tb= window.confirm("bạn đã thêm giỏ hàng thành công")
      console.log(JSON.stringify(data));
      
      
   })
    } else {
      const tb = window.confirm("bạn cần đăng nhập mới thêm được sản phẩm")
    }

  }
  getLocalstorage() {
    if (!localStorage.getItem('token')) return null; // kiểm tra nếu localStorage rỗng thì sẽ trả về giá trị null
    else return JSON.parse(localStorage.getItem('token') as string) //kiểm tra nếu localStorage có dữ liệu thì sẽ trả về dữ liệu
  }

  // comment
  comment: any = {
    content: ''
  }

  data: object = {}
  userId: string = ''
  username: string = ''
  useremail: string = ''
  createaAt: string = ''
  productname: string = ''
  productsId: string = ''

  // luuu  tru do ve

  getLocalstora() {
    if (!localStorage.getItem('token')) return null
    else return JSON.parse(localStorage.getItem('token') as string)
  }


  onComment() {
    // lấy iduser và tên user , email để đổ vào trên các biến bên trên đẫ khai báo
    this.getLocalstora() !== null ? this.userId = this.getLocalstora().user.id : this.userId as any
    this.getLocalstora() !== null ? this.useremail = this.getLocalstora().user.email : this.useremail as any
    this.getLocalstora() !== null ? this.username = this.getLocalstora().user.name : this.username as any
    // lấy id sản phẩm và tên sản phẩm trên detail mơi tìm được bên trên

    this.productname = this.detai.name
    this.productsId = this.detai.id
  
    



    this.data = {
      userid: this.userId,
      useremail: this.useremail,
      username: this.username,
      content: this.comment.content,
      products: this.productname,
      createAt: new Date(),
      productsId: this.productsId
    }

    //push comment vao

    this.commentt.postcomment(this.data).subscribe(data => {
      console.log(data);
    })
    
  }

}
