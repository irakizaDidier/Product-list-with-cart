import { Component, computed, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private service = inject(ProductsService);
  private modalService = inject(NgbModal);
  private toastr = inject(ToastrService);

  products = this.service.products;

  cartProducts = computed(() =>
    this.products().filter((product) => product.quantity)
  );

  total = computed(() =>
    this.products().reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    )
  );

  totalPrice = computed(() =>
    this.products().reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    )
  );

  removeProduct(product: Product): void {
    this.service.removeProduct(product);
  }

  open() {
    const modalRef: NgbModalRef = this.modalService.open(
      ModalContentComponent,
      {
        centered: true,
        size: 'lg',
      }
    );
    modalRef.componentInstance.products = this.products;

    modalRef.dismissed.subscribe((reason: any) => {
      if (reason === 2) {
        this.service.startNewOrder();
        this.toastr.success('The order has been confirmed!');
      }
    });
  }
}
