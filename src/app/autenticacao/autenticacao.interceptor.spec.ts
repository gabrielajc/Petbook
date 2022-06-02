import { TestBed } from '@angular/core/testing';

import { AutenticacaoInterceptor } from './autenticacao.interceptor';

describe('AutenticacaoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutenticacaoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutenticacaoInterceptor = TestBed.inject(AutenticacaoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
