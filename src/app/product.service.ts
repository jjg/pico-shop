import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
  
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
  
}
