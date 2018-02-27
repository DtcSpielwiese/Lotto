import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiehungComponent } from './ziehung.component';

describe('ZiehungComponent', () => {
  let component: ZiehungComponent;
  let fixture: ComponentFixture<ZiehungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiehungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiehungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
