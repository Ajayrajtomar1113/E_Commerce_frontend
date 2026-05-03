import { Component } from '@angular/core';
import { homeCarouselData } from '../../../../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.html',
  styleUrls: ['./main-carousel.scss'],
  standalone: false
})
export class MainCarousel {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 1000);
  }

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.carouselData.length;
  }
}