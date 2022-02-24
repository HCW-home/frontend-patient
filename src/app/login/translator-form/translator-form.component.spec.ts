import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorFormComponent } from './translator-form.component';

describe('TranslatorFormComponent', () => {
  let component: TranslatorFormComponent;
  let fixture: ComponentFixture<TranslatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
