import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { ModalComponent } from './modal/modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule } from '@angular/forms';
import {DialogModule} from 'node_modules/primeng/dialog';
import {TabViewModule} from 'node_modules/primeng/tabview';
import {ButtonModule} from 'node_modules/primeng/components/button/button';
import {TableModule} from 'node_modules/primeng/table';
import {InputTextModule} from 'node_modules/primeng/inputtext';
import {DropdownModule} from 'node_modules/primeng/dropdown';

import { StaffEffects } from './staff/effects/staff.effects';
import { reducers } from './staff/reducers/index';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({staff : reducers}),
        EffectsModule.forRoot([StaffEffects]),
        TabViewModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        DropdownModule,
        DialogModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        StaffComponent,
        ModalComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ngrx-angular-challenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngrx-angular-challenge');
  }));
});
