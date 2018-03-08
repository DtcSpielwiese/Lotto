import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrAutoComponent } from './vr-auto.component';

describe('VrAutoComponent', () => {
  let component: VrAutoComponent;
  let fixture: ComponentFixture<VrAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
