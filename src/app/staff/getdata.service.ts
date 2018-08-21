import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from './staff.state';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<Staff[]>('/assets/randData.json');
  }
}
