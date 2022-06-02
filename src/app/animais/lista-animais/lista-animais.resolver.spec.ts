import { TestBed } from '@angular/core/testing';

import { ListaAnimaisResolver } from './lista-animais.resolver';

describe('ListaAnimaisResolver', () => {
  let resolver: ListaAnimaisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaAnimaisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
