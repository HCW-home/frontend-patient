import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationPage } from './translation.page';

describe('TranslationPage', () => {
  let component: TranslationPage;
  let fixture: ComponentFixture<TranslationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
