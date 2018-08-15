import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {TabViewModule} from 'node_modules/primeng/tabview';
import {ButtonModule} from 'node_modules/primeng/components/button/button';
import {TableModule} from 'node_modules/primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { reducer } from './staff/staff.reducers';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({staff : reducer}),
    TabViewModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
