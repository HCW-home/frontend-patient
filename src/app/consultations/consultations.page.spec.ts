import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsPage } from './consultations.page';

describe('ConsultationsPage', () => {
  let component: ConsultationsPage;
  let fixture: ComponentFixture<ConsultationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
