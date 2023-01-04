import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'front-page-design',
  templateUrl: './front-page-design.component.html',
  styleUrls: ['./front-page-design.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontPageDesignComponent implements OnInit {

  constructor() { }
  cards: Array<string> = ["1", "2", "3", "4", "5"];
  cardSelected: number = 0;

  ngOnInit(): void {

  }

  selectDesign(data: number){
    console.log("a");
    this.cardSelected = data + 1;
  }



}
