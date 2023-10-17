import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component'
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './pages/product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FormProductComponent } from './admin/form-product/form-product.component';
import { SignupComponent } from './login/signup/signup.component';
const routes: Routes = [
 {
  path:'',component:LayoutComponent,children:[
    {
    path:'',component:HomeComponent
    },
    {path:'product',component:ProductComponent},
    {path:'product-detail/:id',component:ProductDetailComponent},
    

]
 },
//  {path:'cart',component:CartComponent},
 {path:'admin',component:AdminLayoutComponent, children:[
  {path:'', component:DashboardComponent},
  {path:'product-add', component:FormProductComponent},
  {path:'product/:id/edit',component:FormProductComponent},
  {path:'product', component:ListProductComponent}
 ]},
 {path:'login', component : LoginComponent},
    {path:'signup', component : SignupComponent},
  {
    path:'**',
    component:NotFoundComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
