import { TestBed } from '@angular/core/testing';

import { SsoAuthService } from './sso-auth.service';

describe('SsoAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SsoAuthService = TestBed.get(SsoAuthService);
    expect(service).toBeTruthy();
  });
});
