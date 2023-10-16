import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LayoutUserComponent } from '../layout/layout-user/layout-user.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './shop/men/men.component';
import { GirlComponent } from './shop/girl/girl.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {
        path: '', component: LayoutUserComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'men/:idsex', component: MenComponent },
            { path: 'girl', component: GirlComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'detail/:id', component: DetailComponent },
            { path: 'login', component: LoginComponent },
            { path: 'cart', component: CartComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }