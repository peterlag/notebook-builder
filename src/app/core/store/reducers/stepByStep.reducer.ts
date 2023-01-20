import { createReducer, on } from '@ngrx/store';
import * as stepByStepActions from '../actions/stepByStep.action'

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(stepByStepActions.increment, (state) => state + 1),
  on(stepByStepActions.decrement, (state) => state - 1),
  on(stepByStepActions.reset, (state) => 0)
);