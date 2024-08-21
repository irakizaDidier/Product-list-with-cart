import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
})
export class DessertsComponent implements OnInit {
  private service = inject(ProductsService);
  products = this.service.products;

  ngOnInit() {}

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
