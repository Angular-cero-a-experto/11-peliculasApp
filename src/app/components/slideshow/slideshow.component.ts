import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper, {Navigation, Pagination, Autoplay } from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  public mySwiper!: Swiper;
  
  constructor(){ }
  
  @Input() movies!: Movie[];

  ngOnInit(): void { }
  ngAfterViewInit(): void {

    Swiper.use([Navigation, Pagination, Autoplay]);
    
    this.mySwiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
