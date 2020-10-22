import { TestBed } from '@angular/core/testing';

import { UploadphotoService } from './uploadphoto.service';

describe('UploadphotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadphotoService = TestBed.get(UploadphotoService);
    expect(service).toBeTruthy();
  });
});
