import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup!: UntypedFormGroup
   savetoken: any = ''
   userss:any=''

  constructor(private auth: AuthService, private fb: UntypedFormBuilder, private users: UsersService, private router: Router) {
    //laays user
    console.log(this.savetoken);
    
    this.users.getUsers().subscribe(data => {
      this.userss = data
      console.log(this.userss);
    })

    this.formGroup = new UntypedFormGroup({
      name: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    })
  }
  loginn() {
    console.log(this.formGroup);
    this.auth.login(this.formGroup.value ).subscribe((data: any) => {
     this.savetoken= data
     console.log(this.savetoken);
     
    const savetokenn= this.auth.savelogin(data)
      // console.log(savetokenn);
      
      // const response:string|null = this.auth.getUser()
      // console.log(response);
      
      // const saveUser:string= JSON.stringify(response)
      // console.log(saveUser);
      // const save = this.auth.savelogin(saveUser)
      // console.log(save);
      
      if (data.user.role === 1) {
        alert("bạn đã đăng nhập thành công")
        this.router.navigateByUrl('/admin')
      } else if (data.user.role === 0) {
        alert("bạn đã đăng nhập thành công")
        this.router.navigateByUrl('/')

      }
      else if (data.user.email !== this.userss.email) {
        console.log("bạn nhập sai email");

        alert("bạn nhập email sai")
      }
      else if (data.user.name !== this.userss.name) {
        console.log("bạn nhập sai name");

        alert("bạn nhập name sai")
      }
     


    })


  }

}


