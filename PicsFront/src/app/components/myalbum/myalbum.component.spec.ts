import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalbumComponent } from './myalbum.component';

describe('MyalbumComponent', () => {
  let component: MyalbumComponent;
  let fixture: ComponentFixture<MyalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
