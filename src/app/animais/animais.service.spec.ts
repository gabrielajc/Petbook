import { TestBed } from '@angular/core/testing';

import { AnimaisService } from './animais.service';

describe('AnimaisService', () => {
  let service: AnimaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
