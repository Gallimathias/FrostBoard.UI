import { TestBed } from '@angular/core/testing';

import { MockPostDataService } from './mock-post-data.service';

describe('MockPostDataService', () => {
  let service: MockPostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
