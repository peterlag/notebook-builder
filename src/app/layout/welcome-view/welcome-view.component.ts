import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent implements OnInit {

  @Output() showSlideEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hideWelcomeMessage(){
    this.showSlideEvent.emit(true);
  }
}