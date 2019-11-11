import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-contents',
  templateUrl: './cart-contents.component.html',
  styleUrls: ['./cart-contents.component.css']
})
export class CartContentsComponent implements OnInit {

  products: Product[];
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    
    // NOTE: will this loop work as expected?
    this.cartService.products.forEach(function(productId){
    
      this.productService.getProduct(productId)
        .subscribe(product => this.products.push(product));
        
      });
  }

}
