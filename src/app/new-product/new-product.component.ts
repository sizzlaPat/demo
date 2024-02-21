import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators} from "@angular/forms";
import { ProductService } from '../services/product.service';
import { Product} from '../model/product.model';





@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],

})
export class NewProductComponent implements OnInit {

public productForm!: FormGroup; // Stockage des valeurs saisies ! pour préciser qu'il n'est pas initialiser et ne pas en tenir compte

constructor(private fb: FormBuilder , private productService : ProductService){
}

/* ngOnInit(){
this.productForm =this.fb.group({
name:this.fb.control(''),
price: this.fb.control(''),
checked:this.fb.control(false)
});
} */
ngOnInit() {
  // Initialize the productForm FormGroup using FormBuilder
  this.productForm = this.fb.group({
    name: this.fb.control('',[Validators.required,Validators.maxLength(10)]),      // Create a form control for name with an initial value of ''
    price: this.fb.control(0,[Validators.required,Validators.maxLength(4)]),     // Create a form control for price with an initial value of ''
    checked: this.fb.control(false) // Create a form control for checked with an initial value of false
  });
}

saveProduct(){
 let product : Product = this.productForm.value;
this.productService.saveProduct(product).subscribe(data =>{
      alert(JSON.stringify(data));
      },
      error=>{
      console.log(error); //Affichage des erreurs
      });

}

}
