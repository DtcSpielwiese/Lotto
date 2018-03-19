import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrRechtsschutzComponent } from './vr-rechtsschutz.component';

describe('VrRechtsschutzComponent', () => {
  let component: VrRechtsschutzComponent;
  let fixture: ComponentFixture<VrRechtsschutzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrRechtsschutzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrRechtsschutzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
