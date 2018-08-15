import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from './models/staff.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

// './../assets/randData.json'
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('/assets/randData.json');
  }
}
