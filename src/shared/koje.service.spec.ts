import { TestBed } from '@angular/core/testing';

import { KojeService } from './koje.service';

describe('KojeService', () => {
  let service: KojeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KojeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
