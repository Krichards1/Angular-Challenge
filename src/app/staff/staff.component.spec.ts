import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponent } from './staff.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StaffEffects } from './effects/staff.effects';
import { reducers } from './reducers/index';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffComponent ],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({staff : reducers}),
       ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
