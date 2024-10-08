import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() add = new EventEmitter<void>();
  @Output() substract = new EventEmitter<void>();

  addProduct(): void {
    this.add.emit();
  }

  substractProduct(): void {
    this.substract.emit();
  }
}
