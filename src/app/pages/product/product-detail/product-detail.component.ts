import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product! : IProduct
    constructor(private ProductService:ProductService,
                private route:ActivatedRoute)
    {
      this.route.params.subscribe(({id}) =>{
        this.ProductService.getProductById(id).subscribe({
          next:(data) => this.product = data,
          error:(err) => console.log(err.message)
          
        })
      })
    }
}
