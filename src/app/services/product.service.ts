import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) { }

  public getProducts(keyword:string="",page:number=1,size:number=4){
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`,{observe:'response'});
  }
  public checkProducts(product:Product):Observable<Product>{
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,{checked:!product.checked});
  }
  public deleteProducts(product:Product){
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`);
  }
  public saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`http://localhost:8089/products/`,product);
  }
  /* public searchProducts(keyword:string):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  } */

  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:8089/products/${productId}`);
}
updateProduct(product:Product):Observable<Product>{
  return this.http.put<Product>(`http://localhost:8089/products/${product.id}`,product);
}

}