import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { SexService } from 'src/app/services/sex.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
formGroup:any=''


constructor(private pro:ProductsService,private router:Router,private param:ActivatedRoute,private sex:SexService,private cate:CategoryService,private fb:UntypedFormBuilder){
 /// lấy id theo sản phẩm
 this.param.params.subscribe(({id})=>{
  this.pro.getProductsId(id).subscribe(data=>{
    this.formGroup=data as any;

  })
 })




}
update(){
    this.pro.updateProduct(this.formGroup.id,this.formGroup).subscribe(data =>console.log(data)
    )
  

 
  
  
  }
}
