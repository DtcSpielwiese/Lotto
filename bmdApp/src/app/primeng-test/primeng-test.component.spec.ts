import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTestComponent } from './primeng-test.component';

describe('PrimengTestComponent', () => {
  let component: PrimengTestComponent;
  let fixture: ComponentFixture<PrimengTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
