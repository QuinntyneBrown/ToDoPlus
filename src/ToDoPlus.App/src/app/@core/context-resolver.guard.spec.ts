import { TestBed } from '@angular/core/testing';

import { ContextResolverGuard } from './context-resolver.guard';

describe('ContextResolverGuard', () => {
  let guard: ContextResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContextResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
