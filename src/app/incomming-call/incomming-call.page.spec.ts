import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommingCallPage } from './incomming-call.page';

describe('IncommingCallPage', () => {
  let component: IncommingCallPage;
  let fixture: ComponentFixture<IncommingCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncommingCallPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncommingCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
