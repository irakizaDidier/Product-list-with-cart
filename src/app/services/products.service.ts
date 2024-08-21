import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';
import { StorageService } from './storage.service';
import { signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products = signal<Product[]>([]);
  readonly products = this._products.asReadonly();

  private storageService = inject(StorageService);
  private http = inject(HttpClient);
  private dataUrl = '/assets/data/data.json';

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    const storedProducts = this.storageService.getStorage();

    if (storedProducts && storedProducts.length > 0) {
      this._products.set(storedProducts);
    } else {
      this.loadInitialData();
    }

    effect(() => {
      this.storageService.setStorage(this.products());
    });
  }

  private loadInitialData(): void {
    this.http.get<Product[]>(this.dataUrl).subscribe({
      next: (data) => {
        this._products.set(data);
        this.storageService.setStorage(data);
      },
      error: (err) => {},
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
      products.find((p) => p === product)!.quantity = 0;
      return [...products];
    });
  }

  startNewOrder(): void {
    this._products.update((products) => {
      products.map((p) => (p.quantity = 0));
      return [...products];
    });
  }
}
