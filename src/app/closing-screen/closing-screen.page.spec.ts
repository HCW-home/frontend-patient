import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingScreenPage } from './closing-screen.page';

describe('ClosingScreenPage', () => {
  let component: ClosingScreenPage;
  let fixture: ComponentFixture<ClosingScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
