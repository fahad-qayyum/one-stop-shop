import {TestBed} from '@angular/core/testing';

import {ItemDatabaseService} from './item-database.service';

describe('ItemHttpService', () => {
  let service: ItemDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
