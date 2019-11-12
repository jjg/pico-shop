import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from './product';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  let aProduct = new Product();
  aProduct.id = 1;
  aProduct.price = 100.00;
  aProduct.taxable = true;
  aProduct.imported = false;
  aProduct.name = "A test product";
      
  it('#add should add one Product to the cart', () => {  
    const service: CartService = TestBed.get(CartService);
    service.add(aProduct.id);
    expect(service.products.length).toBe(1);
  });
  
  it('#empty should remove all Products from the cart', () => {
    const service: CartService = TestBed.get(CartService);
    service.add(aProduct.id);
    service.empty();
    expect(service.products.length).toBe(0);
  });
});
