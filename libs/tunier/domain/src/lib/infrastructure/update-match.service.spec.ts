import { TestBed } from '@angular/core/testing';

import { UpdateMatchService } from './update-match.service';

describe('UpdateMatchService', () => {
  let service: UpdateMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
