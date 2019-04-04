import { TestBed } from '@angular/core/testing';

import { Admin.ResolverService } from './admin.resolver.service';

describe('Admin.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Admin.ResolverService = TestBed.get(Admin.ResolverService);
    expect(service).toBeTruthy();
  });
});
