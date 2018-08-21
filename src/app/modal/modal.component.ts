import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Staff, StaffState } from '../staff/staff.state';
import * as StaffActions from '../staff/staff.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

//IO
  @Input()
  display: boolean = false;

  @Input()
  staff: Staff;

  @Input()
  rowIndex: number;

  @Output()
  onClose = new EventEmitter();

//models
  desc: string;
  role: string;

  constructor(private store: Store<StaffState> ) {
  }

  ngOnInit(){}

//EVENT HANDLERS
  //OnEdit
  update(event){
    // this.store.dispatch(new StaffActions.UpdateStaff());
    this.onClose.emit();
  }

  //onClose
  cancel(){
    this.onClose.emit();
  }
  initData(){
    this.desc = this.staff.description;
    this.role = this.staff.role;
  }
}
