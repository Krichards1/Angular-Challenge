import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { StaffComponent } from './staff/staff.component';
import { StaffEffects } from './staff/effects/staff.effects';
import { reducers } from './staff/reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    StaffComponent
  ],
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
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
