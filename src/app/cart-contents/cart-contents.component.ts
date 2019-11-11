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
  productIds: number[] = [];
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    
    // DEBUG
    console.log(this.cartService.products.length);
    console.log(this.productService);
    
    // DEBUG: just use the ID's until we can figure out calling
    // the product service
    this.productIds = this.cartService.products;
    
    /*
    // NOTE: will this loop work as expected?
    this.cartService.products.forEach(function(productId){
    
      // TODO: this.productService is out-of-scope because
      // it's not passed to the callback function, hmm...
      this.productService.getProduct(productId)
        .subscribe(product => this.products.push(product));
        
    });
    */
    
  }
  
  onEmptyCart(): void {
    this.cartService.empty();
    this.getProducts();
  }

}
