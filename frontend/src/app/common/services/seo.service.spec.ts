import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[],
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SeoService = TestBed.get(SeoService);
    expect(service).toBeTruthy();
  });
});
