import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  contact : FormGroup 
  constructor(private pro:ContactService,private fb:FormBuilder){
    this.contact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
  })
}
  onSubmit(){
if(this.contact.valid){
  this.pro.postcontact(this.contact.value).subscribe(()=>{
    console.log("them thanhf coong");
  }
  
  )
}

  }

}
