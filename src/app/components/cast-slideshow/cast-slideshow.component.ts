import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-response';
import Swiper,{ Autoplay } from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] = [];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      speed: 400,
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
      },
      modules: [ Autoplay ]
    })
  }

}
