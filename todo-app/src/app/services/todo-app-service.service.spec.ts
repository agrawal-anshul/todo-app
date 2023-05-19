import { TestBed } from '@angular/core/testing';

import { TodoAppServiceService } from './todo-app-service.service';

describe('TodoAppServiceService', () => {
  let service: TodoAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
