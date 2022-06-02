import { TestBed } from '@angular/core/testing';

import { AutenticacaoGuard } from './autenticacao.guard';

describe('AutenticacaoGuard', () => {
  let guard: AutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
