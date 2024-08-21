import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/products.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalContentComponent {
  @Input() products: Product[] = [];
  @Input() totalPrice: number = 0;

  constructor(private modalService: NgbModal) {}

  get cartProducts(): Product[] {
    return this.products.filter((product) => product.quantity > 0);
  }

  startOrder(): void {
    this.modalService.dismissAll(2);
  }
}
