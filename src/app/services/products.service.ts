import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';
import { StorageService } from './storage.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products = signal<Product[]>([]);
  readonly products = this._products.asReadonly();

  private storageService = inject(StorageService);
  private http = inject(HttpClient);

  constructor() {
    const storedProducts = this.storageService.getStorage();
    if (storedProducts) {
      this._products.set(storedProducts);
    } else {
      this.loadProducts();
    }

    effect(() => {
      this.storageService.setStorage(this.products());
    });
  }

  private loadProducts(): void {
    this.http
      .get<Product[]>('assets/data/data.json')
      .pipe(
        catchError((error) => {
          console.error('Failed to load products', error);
          return of([]);
        })
      )
      .subscribe((products) => {
        this._products.set(products);
      });
  }

  add(idx: number): void {
    this._products.update((products) => {
      products[idx].quantity++;
      return [...products];
    });
  }

  substract(idx: number): void {
    this._products.update((products) => {
      products[idx].quantity--;
      return [...products];
    });
  }

  removeProduct(product: Product): void {
    this._products.update((products) => {
      const foundProduct = products.find((p) => p === product);
      if (foundProduct) {
        foundProduct.quantity = 0;
      }
      return [...products];
    });
  }

  startNewOrder(): void {
    this._products.update((products) => {
      products.forEach((p) => (p.quantity = 0));
      return [...products];
    });
  }
}
