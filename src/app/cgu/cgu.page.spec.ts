import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CguPage } from './cgu.page';

describe('CguPage', () => {
  let component: CguPage;
  let fixture: ComponentFixture<CguPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CguPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CguPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
