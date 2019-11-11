import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // NOTE: this could store a copy of the Product object for each
  // item in the cart, but that wouldn't reflect the "current" properties
  // of the Product if the price changes in the shop.  I may be overthinking
  // this, but in a real application where items may sit in carts for a long
  // time, it might matter.
  products: number[] = [];
  
  add(productId: number) {
    this.products.push(productId);
  }
  
  clear() {
    this.products = [];
  }

  constructor() { }
}
