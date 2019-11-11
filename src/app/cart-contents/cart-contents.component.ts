import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Item } from '../item';

@Component({
  selector: 'app-cart-contents',
  templateUrl: './cart-contents.component.html',
  styleUrls: ['./cart-contents.component.css']
})
export class CartContentsComponent implements OnInit {

  items: Item[] = [];
  totalTax: number = 0;
  totalDuty: number = 0;
  cartTotal: number = 0;
  
  updateItem(product: Product): void {
    
    let thisItem = new Item(product);
    
    // calculate tax
    thisItem.tax = 0;
    if(thisItem.taxable){
      thisItem.tax = product.price * 0.1;
      // TODO: round tax as per requirements
      this.totalTax = this.totalTax + thisItem.tax;
    }
    
    // calculate duty
    thisItem.duty = 0;
    if(thisItem.imported){
      thisItem.duty = product.price * 0.05;
      // TODO: round duty as per requirements
      this.totalDuty = this.totalDuty + thisItem.duty;
    }
    
    // update cart total
    this.cartTotal = this.cartTotal + thisItem.price + thisItem.tax + thisItem.duty;
    
    this.items.push(thisItem);
  }
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
  
    // NOTE: I'm not sure this loop is async-safe
    for (let productId of this.cartService.products) {
      this.productService.getProduct(productId)
        .subscribe(product => this.updateItem(product));    
    }
  }
  
  onEmptyCart(): void {
    this.cartService.empty();
    this.items = [];
    this.getProducts();
  }

}
