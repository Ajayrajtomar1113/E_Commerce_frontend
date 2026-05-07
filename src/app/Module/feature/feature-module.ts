import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature } from './components/feature';
import { Home } from './components/home/home';
import { MainCarousel } from './components/home/main-carousel/main-carousel';
import { ProductSlider } from './components/home/product-slider/product-slider';
import { HomeProductCart } from './components/home/home-product-cart/home-product-cart';
import { Products } from './components/products/products';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared-module';
import { Cart } from './components/cart/cart';
import { ProductDetails } from './components/product-details/product-details';
import { Checkout } from './components/checkout/checkout';
import { Payment } from './components/payment/payment';
import { PaymentSuccess } from './components/payment-success/payment-success';
import { Order } from './components/order/order';
import { OrderDetails } from './components/order-details/order-details';

@NgModule({
  declarations: [
    Feature,
    Home,
    MainCarousel,
    ProductSlider,
    HomeProductCart,
    Products,
    Cart,
    ProductDetails,
    Checkout,
    Payment,
    PaymentSuccess,
    Order,
    OrderDetails,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    SharedModule,
  ],
  exports: [Feature, Home, Products],
})
export class FeatureModule {}
