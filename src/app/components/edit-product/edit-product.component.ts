import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId!:number
  productFormGroup!:FormGroup
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,
    private formBuilder:FormBuilder){}

    updateProduct(){
      let product:Product=this.productFormGroup.value;
      this.productService.updateProduct(product).subscribe({
        next:data=>{
          alert(JSON.stringify(data));
        },
        error:err=>{
          console.log(err);
        }
      })
    }

  ngOnInit(): void {
    this.productId=this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next:(product)=>{
        this.productFormGroup=this.formBuilder.group({
          id:this.formBuilder.control(product.id),
          name:this.formBuilder.control(product.name),
          price:this.formBuilder.control(product.price),
          checked:this.formBuilder.control(product.checked)
        })
      },
      error:(err)=>{
        console.log(err);
      }
    });  
  }
}
