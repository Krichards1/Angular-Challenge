import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Staff } from '../staff/models/staff.model';
import { StaffState } from '../staff/staff.state';
import * as StaffActions from '../staff/actions/staff.actions';

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

  @Output()
  onClose = new EventEmitter();

  constructor(private store: Store<StaffState>) { }

  ngOnInit() {
  }

//EVENT HANDLERS
  //OnEdit

  //onClose
  cancel(event){
    console.log("cancelled");
    this.onClose.emit();
  }
}
