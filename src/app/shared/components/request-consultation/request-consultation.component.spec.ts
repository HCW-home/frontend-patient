import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConsultationComponent } from './request-consultation.component';

describe('RequestConsultationComponent', () => {
  let component: RequestConsultationComponent;
  let fixture: ComponentFixture<RequestConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestConsultationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
