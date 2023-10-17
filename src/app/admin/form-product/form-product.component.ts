  import { Component } from '@angular/core';
  import { FormBuilder } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { lastValueFrom } from 'rxjs';
  import { IProduct } from 'src/app/interfaces/product';
  import { ProductService } from 'src/app/service/product.service';
  @Component({
    selector: 'app-form-product',
    templateUrl: './form-product.component.html',
    styleUrls: ['./form-product.component.css']
  })
  export class FormProductComponent {
    product : IProduct = {
      name: '',
      price: 0,
      description: '',
      imageUrl:''
    
    }
    productForm  = this.formBuilder.group({
      name:[''],
      price:[0],
      description:[''],
      imageUrl : ['']
    })
    
    mode : "create" | "update" = "create"
    constructor( private ProductService: ProductService,
                private router : Router, private formBuilder:FormBuilder, private routerActive:ActivatedRoute ){}


    async ngOnInit(){
      try {
        const {id} = this.routerActive.snapshot.params;
        console.log("id", id);
        if(id){
          this.product = await lastValueFrom(this.ProductService.getProductById(id))
          this.productForm.patchValue(this.product)
          this.mode = "update"
        }
      } catch (error) {
        console.log("lỗi gì đó", error);
        
      }
    } 

  async onSubmit() {
      try {
        if(this.mode ==="create"){

          const data = await lastValueFrom(this.ProductService.addProduct(this.productForm.value as IProduct))
          console.log(data);
          alert("Thêm sản phẩm thành công")

          this.router.navigate(['/admin/product'])
          
        }else{
          const data = await lastValueFrom(this.ProductService.updateProduct({...this.product , ...this.productForm.value} as IProduct) )
          console.log(data);
          alert("Sửa sản phẩm thành công")

          this.router.navigate(['/admin/product'])
        }
        
      } catch (error) {
        console.log(error);
        
        
      }
      
      
    }

  }
