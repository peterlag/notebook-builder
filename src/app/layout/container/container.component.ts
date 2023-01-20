import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as stepByStepActions from 'src/app/core/store/actions/stepByStep.action';
// import { stateWelcome } from 'src/app/state/selectos/welcomeView.selector';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  stepNumber: number = 0;
  // showSlide$: Observable<boolean> = this.store.select(stateWelcome);
  showSlide:boolean = false;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(stepByStepActions.increment())
  }

  stepNumberEvent(event: number){
    this.stepNumber = event;
  }

  showSlideEvent(event:boolean){
    this.stepNumber = 1; 
    this.showSlide = event;
  }


}
