import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
})
export class DessertsComponent {
  private service = inject(ProductsService);

  products = this.service.products;

  constructor() {
    console.log('Products:', this.products());
  }

  add(idx: number): void {
    this.service.add(idx);
  }

  substract(idx: number): void {
    this.service.substract(idx);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
