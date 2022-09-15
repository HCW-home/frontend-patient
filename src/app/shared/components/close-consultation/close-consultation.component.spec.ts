import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';

import { CloseConsultationComponent } from './close-consultation.component';

describe('CloseConsultationComponent', () => {
  let component: CloseConsultationComponent;
  let fixture: ComponentFixture<CloseConsultationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CloseConsultationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
