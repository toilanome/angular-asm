import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { faCoffee,faSearch,faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
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
      if(Array.isArray(result.data)){
        this.products = result.data

        this.productList = result.data
      }else{
        console.error("not array", result.data)
      }
    })
  }
}
