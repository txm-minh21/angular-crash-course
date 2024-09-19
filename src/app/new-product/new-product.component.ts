import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product)
    .subscribe({
      next: () => {
        this.router.navigate(['products']);
      },
      error: (error: HttpErrorResponse | ErrorEvent) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred: ', error.message);
        } else {
          // server side error
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`)
        }
      }
    })
  }
}
