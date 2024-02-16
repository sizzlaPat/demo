import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  public getProducts() :Observable<Product[]> {

  return this.http.get<Product[]>("http://localhost:8089/products");

  }

  public checkProducts(product:Product):Observable<any> {

  return this.http.patch<any>(`http://localhost:8089/products/${product.id}`,{ checked: !product.checked });
  }
}
