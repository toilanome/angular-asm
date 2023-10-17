import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { faCoffee,faSearch,faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  productList : any[] = [];
  products:IProduct[] =[];

  constructor(private productService:ProductService){
    this.productService.getAllProducts().subscribe({
      
      next:(data) =>{
        if (Array.isArray(data)) {
          this.products = data;
          console.log("data", data);
        } else {
          console.error("Data is not an array:", data);
        }
        // this.products = data;
        // console.log("data",data);
        
      },
      error:(error) =>{
        console.log(error.message);
        
      }
    }
    
    )
    
  }
  faCoffee = faCoffee;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser= faUser

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result:any) =>{
      this.productList = result.data
    })
  }
}
