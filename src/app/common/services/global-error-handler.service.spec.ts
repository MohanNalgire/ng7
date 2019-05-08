import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ToastrService } from 'ngx-toastr';
import { AppModule } from 'src/app/app.module';

describe('GlobalErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ToastrService],
    imports:[AppModule]
  }));

  it('should be created', () => {
    const service: GlobalErrorHandlerService = TestBed.get(GlobalErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
