import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './pages/product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { FormProductComponent } from './admin/form-product/form-product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    ServicesComponent,
    NotFoundComponent,
    AdminComponent,
    ProductComponent,
    LayoutComponent,
    ProductDetailComponent,
    DashboardComponent,
    ListProductComponent,
    AdminLayoutComponent,
    FormProductComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
