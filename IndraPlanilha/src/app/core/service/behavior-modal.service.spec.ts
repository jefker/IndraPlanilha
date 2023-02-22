import { TestBed } from '@angular/core/testing';

import { BehaviorModalService } from './behavior-modal.service';

describe('BehaviorModalService', () => {
  let service: BehaviorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
