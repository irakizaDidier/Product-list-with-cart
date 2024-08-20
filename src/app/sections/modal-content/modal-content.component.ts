import { Component, Input } from '@angular/core';
import { Product } from '../../models/products.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent {
  @Input() products: Product[] = [];

  constructor(private modalService: NgbModal) {}

  get cartProducts(): Product[] {
    return this.products.filter((product) => product.quantity > 0);
  }

  get total(): number {
    return this.products.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    );
  }

  startOrder(): void {
    this.modalService.dismissAll(2);
  }
}
