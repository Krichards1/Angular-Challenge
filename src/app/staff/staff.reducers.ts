import { Staff } from './models/staff.model';
import * as StaffActions from './actions/staff.actions';
import { Action } from '@ngrx/store';

//initial list of staff will pull from JSON


export function reducer(state: Staff[], action: StaffActions.Actions){

  switch(action.type){

    case StaffActions.INIT_STAFF:
      return action.payload;

    case StaffActions.ADD_STAFF:
      return [...state, action.payload];

    case StaffActions.UPDATE_STAFF:
      return [...state];
  }
}
