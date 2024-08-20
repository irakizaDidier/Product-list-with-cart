import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private KEY_PRODUCTS = 'DESSERTS_PRODUCTS';

  setStorage(products: Product[]): void {
    localStorage.setItem(this.KEY_PRODUCTS, JSON.stringify(products));
  }

  getStorage(): Product[] | null {
    const products = localStorage.getItem(this.KEY_PRODUCTS);
    return products ? JSON.parse(products) : products;
  }
}
