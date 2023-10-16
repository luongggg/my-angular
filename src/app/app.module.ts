import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRoutingModule } from './pagesUser/user-routing.module';
import { AboutComponent } from './pagesUser/about/about.component';
import { CartComponent } from './pagesUser/cart/cart.component';
import { GirlComponent } from './pagesUser/shop/girl/girl.component';
import { MenComponent } from './pagesUser/shop/men/men.component';
import { LayoutUserComponent } from './layout/layout-user/layout-user.component';
import { ContactComponent } from './pagesUser/contact/contact.component';
import { HomeComponent } from './pagesUser/home/home.component';
import { LayoutComponent } from './pagesAdmin/layout/layout.component';


import { DetailComponent } from './pagesUser/detail/detail.component';
import { LoginComponent } from './pagesUser/auth/login/login.component';
import { RegisterComponent } from './pagesUser/auth/register/register.component';
// import { SearchComponent } from './pagesUser/search/search.component';
import { UpdateComponent } from './pagesAdmin/pagesProducts/update/update.component';
import { CreateComponent } from './pagesAdmin/pagesProducts/create/create.component';
import { HomeCategoryComponent } from './pagesAdmin/pagesCategory/home-category/home-category.component';
import { UpdateCategoryComponent } from './pagesAdmin/pagesCategory/update-category/update-category.component';
import { CreateCategoryComponent } from './pagesAdmin/pagesCategory/create-category/create-category.component';
import { AdminRoutingModule } from './pagesAdmin/admin-routin.module';
import { HomeProductsComponent } from './pagesAdmin/pagesProducts/home/home.component';


// import { ConponmentComponent } from './conponment/conponment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CartComponent,
    GirlComponent,
    MenComponent,
    LayoutComponent,
    LayoutUserComponent,
    ContactComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    CreateComponent,
    HomeCategoryComponent,
    HomeProductsComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
