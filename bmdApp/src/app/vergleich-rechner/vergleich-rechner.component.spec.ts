import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VergleichRechnerComponent } from './vergleich-rechner.component';

describe('VergleichRechnerComponent', () => {
  let component: VergleichRechnerComponent;
  let fixture: ComponentFixture<VergleichRechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VergleichRechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VergleichRechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
