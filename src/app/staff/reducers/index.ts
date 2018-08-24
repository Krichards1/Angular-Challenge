import { Action } from '@ngrx/store';

import { Staff } from '../models/staff.state';
import * as StaffActions from '../actions/staff.actions';


export function reducers(state: Staff[], action: StaffActions.StaffActions){

  switch(action.type){

    case StaffActions.GET_STAFF:
      return state;

    case StaffActions.INIT_STAFF:
      return action.payload;

    case StaffActions.ADD_STAFF:
      return state;

    case StaffActions.ADD_STAFF_SUCCESS:
      return [...state, action.payload];

    case StaffActions.UPDATE_STAFF:
      Object.assign(state[action.payload.index], action.payload.updates);
      return state;
  }
}
