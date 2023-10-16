import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { SexService } from 'src/app/services/sex.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formGroup!: UntypedFormGroup
  category:any=''
  sexx:any=''
  constructor(private cate:CategoryService, private pro:ProductsService,private fb:UntypedFormBuilder,private sex:SexService){
    // lấy category
    this.cate.getCategory().subscribe(data=>{
      console.log(data);
      this.category=data as any;
      console.log(this.category);

      /// láy sex
      this.sex.getsex().subscribe(data=>{
        this.sexx= data
      })
      
      
    })
    this.formGroup= this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required],
      image:['', Validators.required],
      idsex:['', Validators.required],
    })
  }
  create(){
    if(this.formGroup.valid){
      this.pro.Addproducts(this.formGroup.value).subscribe(data=>{
        console.log(data);
        
      })
    }
  }

}
