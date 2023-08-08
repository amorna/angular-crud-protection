import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { AppStateService } from 'src/app/services/app-state.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  /* searchProduct(){
    this.productService.searchProducts(this.keyword).subscribe({
      next:value=>this.products=value
    }

    )
  } */

 constructor(private productService:ProductService,
  private router:Router,public appState:AppStateService){}

 ngOnInit(): void {
     this.searchProducts();
 }
 
 searchProducts(){
    this.productService.getProducts(this.appState.productsState.keyword,this.appState.productsState.currentPage,this.appState.productsState.pageSize).
    subscribe({
    
       next:(resp)=>{this.appState.productsState.products=resp.body as Product[];
        let totalProducts:number=parseInt(resp.headers.get('x-total-count')!)
        this.appState.productsState.totalProducts=totalProducts;
        this.appState.productsState.totalPages= Math.floor(totalProducts/this.appState.productsState.pageSize);
        if(totalProducts%this.appState.productsState.pageSize!=0)  {
          this.appState.productsState.totalPages=this.appState.productsState.totalPages+1;
        }
      },
       error:err=>{console.log(err);}
    })

  }

  handleCheckProduct(product:Product){
    this.productService.checkProducts(product)
    .subscribe({next:updateProduct=>{product.checked=!product.checked;
     // this.getProducts()
    }
  })
    
  }
  handleDeleteProduct(product:Product){
    if(confirm("Etes vous sûr de supprimer?"))
    this.productService.deleteProducts(product).subscribe(
      {next:value=>{
       // this.getProducts()
      this.appState.productsState.products= this.appState.productsState.products.filter((p:any)=>p.id!=product.id)
      }
    }
    )
  }
  
  handleEditProduct(product:Product){
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`);
  }
  

  handleGoToPage(page:number){
    this.appState.productsState.currentPage=page;
    this.searchProducts();

  }

}
