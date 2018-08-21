import { Staff } from './staff.state';
import * as StaffActions from './staff.actions';
import { Action } from '@ngrx/store';

//initial list of staff will pull from JSON


export function reducer(state: Staff[], action: StaffActions.Actions){

  switch(action.type){

    case StaffActions.GET_STAFF:
      return state;

    case StaffActions.INIT_STAFF:
      return action.payload;

    case StaffActions.ADD_STAFF:
      return [...state, action.payload];

    case StaffActions.UPDATE_STAFF:
      console.log('effect in effect');
      return state;
  }
}
