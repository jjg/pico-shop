import { Product } from './product';

export const PRODUCTS: Product[] = [
  { id: 1, price: 16.00, taxable: false, imported: false, name: '16lb bag of Skittles'},
  { id: 2, price: 99.99, taxable: true, imported: false, name: 'Walkman'},
  { id: 3, price: 0.99, taxable: false, imported: false, name: 'bag of microwave Popcorn'},
  { id: 4, price: 11.00, taxable: false, imported: true, name: 'imported bag of Vanilla-Hazelnut Coffee'},
  { id: 5, price: 15001.25, taxable: true, imported: true, name: 'imported Vespa'},
  { id: 6, price: 75.99, taxable: false, imported: true, name: 'imported crate of Almond Snickers'},
  { id: 7, price: 55.00, taxable: true, imported: false, name: 'Discman'},
  { id: 8, price: 10.00, taxable: true, imported: true, name: 'imported Bottle of Wine'},
  { id: 9, price: 997.99, taxable: false, imported: false, name: '300# bag of Fair-Trade Coffee'}
];
