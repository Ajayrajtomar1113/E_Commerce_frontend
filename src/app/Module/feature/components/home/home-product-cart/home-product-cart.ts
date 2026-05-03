import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-cart',
  templateUrl: './home-product-cart.html',
  styleUrls: ['./home-product-cart.scss'],
  standalone: false
})
export class HomeProductCart {
   @Input() product:any
}
