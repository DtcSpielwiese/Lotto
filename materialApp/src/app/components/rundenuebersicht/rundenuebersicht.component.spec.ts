import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RundenuebersichtComponent } from './rundenuebersicht.component';

describe('RundenuebersichtComponent', () => {
  let component: RundenuebersichtComponent;
  let fixture: ComponentFixture<RundenuebersichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RundenuebersichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RundenuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
