import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[],
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HeaderService = TestBed.get(HeaderService);
    expect(service).toBeTruthy();
  });
});
