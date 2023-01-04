import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  showSlide: boolean = false;
  stepNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  stepNumberEvent(event: number){
    this.stepNumber = event;
  }

  showSlideEvent(event:boolean){
    this.showSlide = event;
  }


}
