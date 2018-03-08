import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrKrankenComponent } from './vr-kranken.component';

describe('VrKrankenComponent', () => {
  let component: VrKrankenComponent;
  let fixture: ComponentFixture<VrKrankenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrKrankenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrKrankenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
