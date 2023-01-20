import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as stepByStepActions from 'src/app/core/store/actions/stepByStep.action';

@Component({
  selector: 'welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent implements OnInit {

  @Output() showSlideEvent = new EventEmitter();
  count$: Observable<number> | undefined;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
   }

  ngOnInit(): void {
  }

  hideWelcomeMessage(){
    console.log("a");
    this.showSlideEvent.emit(true);
    let hideWelcome = true;
    this.store.dispatch(stepByStepActions.increment())
  }
}