import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotorawComponent } from './photoraw.component';

describe('PhotorawComponent', () => {
  let component: PhotorawComponent;
  let fixture: ComponentFixture<PhotorawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotorawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotorawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
