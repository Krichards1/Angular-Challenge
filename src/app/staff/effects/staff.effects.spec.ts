import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StaffEffects } from './staff.effects';
import { HttpClientModule } from '@angular/common/http';

describe('StaffEffects', () => {
  let actions$: Observable<any>;
  let effects: StaffEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StaffEffects,
        provideMockActions(() => actions$)
      ],
      imports:[
        HttpClientModule
      ]
    });

    effects = TestBed.get(StaffEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
