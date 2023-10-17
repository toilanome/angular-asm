import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  productList : any[] = [];
  products:IProduct[] =[];

  constructor(private productService:ProductService){}

  async ngOnInit() {
    try {
      const data =  this.products = await lastValueFrom(this.productService.getAllProducts())
      console.log("data",data);
      
    } catch (error) {
      console.log("lỗi",error);
      
    }
  }
  removeProduct(id:number | string){
    const confirm = window.confirm("Có chắc muốn xóa ?")
    if(confirm) this.products = this.products.filter(item => item.id !== id)
    console.log(this.products);
    
  }
}
