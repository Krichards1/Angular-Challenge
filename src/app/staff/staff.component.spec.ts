import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { StaffComponent } from './staff.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StaffEffects } from './effects/staff.effects';
import { reducers } from './reducers/index';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;
  let de = DebugElement;
  let el = HTMLElement;

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
    let fixture = TestBed.createComponent(StaffComponent);
    let component = fixture.componentInstance;
    let debugElement = fixture.debugElement;
    let element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create table', async(() => {
    fixture = TestBed.createComponent(StaffComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('p-table')).length).toEqual(1);
  }));

  // it ('should have data in table', async(() => {
  //   fixture = TestBed.createComponent(StaffComponent);
  //   fixture.detectChanges();
  //
  //   fixture.whenStable().then(() => {
  //     const cells = fixture.debugElement.queryAll(By.css('th'));
  //     expect(cells.length).toBeGreaterThan(10);
  //   });
  // }));

  // it('should add element to store', async(() => {
  //   const spy = spyOn(component, 'handleClick');
  //   fixture.detectChanges();
  //
  //   const cell = fixture.debugElement.queryAll(By.css('p-button'))[0];
  //   console.log(cell);
  //   cell.nativeElement.click();
  //    fixture.detectChanges();
  //
  //    fixture.whenStable().then(() => {
  //       expect(spy).toHaveBeenCalled();
  //   }));
  // });
});
