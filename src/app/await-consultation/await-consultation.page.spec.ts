import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitConsultationPage } from './await-consultation.page';

describe('AwaitConsultationPage', () => {
  let component: AwaitConsultationPage;
  let fixture: ComponentFixture<AwaitConsultationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitConsultationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitConsultationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
