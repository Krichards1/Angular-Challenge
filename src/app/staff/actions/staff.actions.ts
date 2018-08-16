import { Staff } from './../models/staff.model';

import { Action } from '@ngrx/store';


export const INIT_STAFF = '[Staff] INIT_STAFF';
export const ADD_STAFF = '[Staff] ADD_STAFF';
export const UPDATE_STAFF = '[Staff] UPDATE_STAFF';

// GETDATA FUNCTION
export class InitStaffs implements Action {
    readonly type = INIT_STAFF;

    constructor(public payload: Staff[]){};
}

//TO BE CALLED BY ADD BUTTON COMPONENT
export class AddStaff implements Action {
    readonly type = ADD_STAFF;


    constructor(public payload: Staff){};
}

// editstaff option
export class UpdateStaff implements Action {
    readonly type = UPDATE_STAFF;


    //constructor(public payload: Staff){};
}

export type Actions = InitStaffs | AddStaff | UpdateStaff;
