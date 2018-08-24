import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from "rxjs";
import { GetDataService } from "../services/getdata.service";

import * as StaffActions from '../actions/staff.actions';
import { Staff } from '../models/staff.state';

import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class StaffEffects {

  constructor(private actions$: Actions, private service: GetDataService) {}

  @Effect()
    getStaff$ = this.actions$.pipe(
      ofType(StaffActions.GET_STAFF),
      switchMap(action =>
        this.service.getData()
      ),
      map(payload => new StaffActions.InitStaffs(payload))
    );

  @Effect()
    addStaff$ = this.actions$.pipe(
      ofType(StaffActions.ADD_STAFF),
      map(res => new StaffActions.AddStaffSuccess((res as any).payload))
    );
}
