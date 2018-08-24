import { Action } from '@ngrx/store';
import { Staff } from '../models/staff.state';

export const GET_STAFF = '[Staff] GET_STAFF';
export const INIT_STAFF = '[Staff] INIT_STAFF';
export const ADD_STAFF = '[Staff] ADD_STAFF';
export const ADD_STAFF_SUCCESS = '[Staff] ADD_STAFF_SUCCESS';
export const UPDATE_STAFF = '[Staff] UPDATE_STAFF';

export class GetStaff implements Action {
  readonly type = GET_STAFF;
}

export class InitStaffs implements Action {
    readonly type = INIT_STAFF;

    constructor(public payload: Staff[]){};
}

export class AddStaff implements Action {
    readonly type = ADD_STAFF;

    constructor(public payload: Staff){};
}

export class AddStaffSuccess implements Action {
    readonly type = ADD_STAFF_SUCCESS;

    constructor(public payload: Staff){};
}

export class UpdateStaff implements Action {
    readonly type = UPDATE_STAFF;

    constructor(public payload: {updates: any, index: number}){};
}

export type StaffActions = GetStaff | InitStaffs | AddStaff | AddStaffSuccess | UpdateStaff;
