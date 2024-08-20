import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-cart-button',
  templateUrl: './add-cart-button.component.html',
  styleUrls: ['./add-cart-button.component.css'],
})
export class AddCartButtonComponent {
  @Output() add = new EventEmitter<void>();

  addToCart(): void {
    this.add.emit();
  }
}
