import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'step-process',
  templateUrl: './step-process.component.html',
  styleUrls: ['./step-process.component.scss'], 
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style(true ? { opacity: 0 , height: 0, } : { opacity: 0, }),
        animate(500, style(true ? { opacity: 1, height: 'fit-content' } : { opacity: 1, })),
      ]),
    ])
  ]
})
export class StepProcessComponent implements OnInit {

  @Input() stepNumber: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
}
