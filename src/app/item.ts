import { Product } from './product';

export class Item {

  id: number;
  quantity: number;
  tax: number;
  duty: number;
  
  // TODO: could we just inheret these from Product?
  productId: number;
  price: number;
  taxable: boolean;
  imported: boolean;
  name: string;
  
  constructor(product: Product){
    this.productId = product.id;
    this.price = product.price;
    this.taxable = product.taxable;
    this.imported = product.imported;
    this.name = product.name;
  }
  
}
