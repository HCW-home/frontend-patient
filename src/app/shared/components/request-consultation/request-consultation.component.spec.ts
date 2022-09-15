import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';

import { RequestConsultationComponent } from './request-consultation.component';

describe('RequestConsultationComponent', () => {
  let component: RequestConsultationComponent;
  let fixture: ComponentFixture<RequestConsultationComponent>;

  beforeEach(waitForAsync(() => {
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
