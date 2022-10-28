import { TestBed } from '@angular/core/testing';

import { BebidasSnackService } from './bebidas-snack.service';

describe('BebidasSnackService', () => {
  let service: BebidasSnackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasSnackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
