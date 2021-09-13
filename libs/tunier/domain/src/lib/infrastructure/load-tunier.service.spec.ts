import {TestBed} from '@angular/core/testing';

import {LoadTunierService} from './load-tunier.service';

describe('LoadTunierService', () => {
  let service: LoadTunierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadTunierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
