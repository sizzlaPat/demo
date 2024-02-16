import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product} from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
/* products : Array<any> =[
 {id:1 ,name: "computer", price:600,checked:false},
 {id:2 ,name: "printer", price:100,checked:true},
 {id:3 ,name: "scanner", price:110,checked:false},
 {id:4 ,name: "harddrive", price:100,checked:true},
 {id:5 ,name: "USB key", price:6,checked:false}
]; */
products : Array<Product> =[];

constructor(private productService:ProductService){}

ngOnInit(){
this.getProducts();
}

getProducts(){
//this.http.get<Array<any>>("http://localhost:8089/products")
this.productService.getProducts().subscribe(data =>{
 this.products=data;
 },
 error=>{
 console.error(error); //Traitement des erreurs
 });
}


handleCheckProduct(product:Product){
/* this.http.patch('http://localhost:8089/products/${product.id}',{checked:!product.checked})
 product.checked=!product.checked; */
 //this.http.patch(`http://localhost:8089/products/${product.id}`, { checked: !product.checked })
this.productService.checkProducts(product).subscribe(
         () => {
           //product.checked = !product.checked;
           this.getProducts();
         },
         error =>{
           console.error(error);
         }
       );
}

}
