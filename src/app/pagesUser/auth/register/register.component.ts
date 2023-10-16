import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup!:UntypedFormGroup
  saveUser:any=''
  constructor(private auth: AuthService, private fb: UntypedFormBuilder,private router:Router){
    this.formGroup= new UntypedFormGroup({
      name: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    })
  }
  loginn(){

    
    this.auth.register(this.formGroup.value)
     alert("bạn đã đăng kí thành công")
     this.router.navigateByUrl('/login')
  // 
   
    
  }
  

}
