import { TestBed, inject } from '@angular/core/testing';

import { GetDataService } from './getdata.service';
import { HttpClientModule } from '@angular/common/http';


describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
