import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Staff } from '../staff/models/staff.state';

interface Role {
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  sc: Staff;
  roles: Role[];
  selectedRole: Role;

//IO
  @Input()
  display: boolean = false;

  @Input()
  staff: Staff;

  @Input()
  rowIndex: number;

  @Output()
  onClose = new EventEmitter();


  constructor() {
    this.roles = [
            {name: 'AGENT'},
            {name: 'RN'},
            {name: 'MD'},
            {name: 'DA'}
        ];
  }

  ngOnInit(){
    this.sc = Object.assign({}, this.staff);
  }

//EVENT HANDLERS
  //OnSaved
  update(){
    this.sc.role = this.selectedRole.name;
    this.onClose.emit({updates: this.sc, index: this.rowIndex});
  }

  //onCancelled
  cancel(){
    this.selectedRole = {name: this.sc.role};
    this.onClose.emit();
  }

  onShow(){
    this.sc = Object.assign(this.sc, this.staff);
    this.selectedRole = {name: this.sc.role};
  }

}
