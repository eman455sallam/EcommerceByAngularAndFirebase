import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { deAuthGuard } from './de-auth.guard';

describe('deAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
