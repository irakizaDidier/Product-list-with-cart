import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';
import { AddSubtractButtonComponent } from './components/add-substract-button/add-substract-button.component';
import { ProductComponent } from './components/product/product.component';
import { ImageSizePipe } from './components/product/shared/image-size.pipe';
import { CartComponent } from './sections/cart/cart.component';
import { DessertsComponent } from './sections/desserts/desserts.component';
import { ModalContentComponent } from './sections/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCartButtonComponent,
    AddSubtractButtonComponent,
    ProductComponent,
    CartComponent,
    DessertsComponent,
    ModalContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ImageSizePipe, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
