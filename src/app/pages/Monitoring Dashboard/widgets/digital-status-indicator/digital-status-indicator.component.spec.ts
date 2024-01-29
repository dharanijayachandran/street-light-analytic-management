import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStatusIndicatorComponent } from './digital-status-indicator.component';

describe('DigitalStatusIndicatorComponent', () => {
  let component: DigitalStatusIndicatorComponent;
  let fixture: ComponentFixture<DigitalStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalStatusIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
