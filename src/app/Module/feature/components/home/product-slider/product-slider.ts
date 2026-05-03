import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.html',
  styleUrls: ['./product-slider.scss'],
  standalone: false
})
export class ProductSlider {
   @Input() title: string = '';    
  @Input() products: any[] = [];  
}
