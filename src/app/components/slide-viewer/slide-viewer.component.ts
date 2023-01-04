import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'slide-viewer',
  templateUrl: './slide-viewer.component.html',
  styleUrls: ['./slide-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideViwerComponent implements OnInit {

  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 3 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

}

