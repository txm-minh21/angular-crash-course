import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: ProductRepresentation[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
    .subscribe({
      next: (result) => {
        this.products = result;
      }
    })
  }

}
