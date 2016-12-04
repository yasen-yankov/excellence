import { Action } from '@ngrx/store';
import { Release } from '../models/release';
import { type } from '../../util';

export const ActionTypes = {
  SELECT: type('[Release] Select'),
  LOAD: type('[Release] Load'),
  LOAD_SUCCESS: type('[Release] Load Success'),
  LOAD_FAIL: type('[Release] Load Fail'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Release[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SelectAction;