import { TestBed } from '@angular/core/testing';

import { LoadMatchesService } from './load-matches.service';

describe('LoadMatchesService', () => {
  let service: LoadMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
