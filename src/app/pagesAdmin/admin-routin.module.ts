import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './pagesProducts/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './pagesProducts/create/create.component';
import { UpdateComponent } from './pagesProducts/update/update.component';



const routes: Routes = [
  
 
  
  
  {
    path: 'admin',component:LayoutComponent, children:[
      {
        path:'',component:HomeProductsComponent 
       },
       {
        path:'createProducts',component:CreateComponent
       },
       {
        path:'update/:id',component:UpdateComponent
       }

    ]
   }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   
  })
export class AdminRoutingModule {

//  const admin= localStorage.getItem('token')

 }