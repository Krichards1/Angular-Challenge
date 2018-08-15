import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Staff } from './models/staff.model';
import { StaffState } from './staff.state';
import * as StaffActions from './actions/staff.actions';
import {GetDataService} from './getdata.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers: [GetDataService]
})


export class StaffComponent implements OnInit {

  staff: Observable<Staff[]>;
  cols: any[];
  selectedRow: Staff;

  constructor(private store: Store<StaffState>, private service: GetDataService) {
    this.staff = store.select('staff');
   }


//INITIALIZATION
  ngOnInit() {
    //Initialize Staff List
    this.service.getData().subscribe((res: Staff[]) => {

      this.store.dispatch(new StaffActions.InitStaffs(res));

    });

    this.cols = [
      {field: 'description', header: 'Description'},
      {field: 'code', header: 'Code'},
      {field: 'role', header: 'Role'},
      {field: 'active', header:'Active'},
      {field: 'last_mod', header:'Last Modified By'},
      {field: 'last_mod_date', header:'Last Modified Date/Time'}
    ]
  }


//EVENT HANDLING
  onRowSelect(event) {
      console.log(this.selectedRow.code);
    }

  handleClick(event){
    this.store.dispatch(new StaffActions.AddStaff({description: "added staff", code:"AAA", role:"AGENT", active:"Y",last_mod:"Kristin Richards",
    last_mod_date:"Tue Aug 14 2018 19:56:32 GMT-0700 (Pacific Daylight Time)"}));
  }
}