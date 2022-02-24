import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseConsultationComponent } from './close-consultation.component';

describe('CloseConsultationComponent', () => {
  let component: CloseConsultationComponent;
  let fixture: ComponentFixture<CloseConsultationComponent>;

  beforeEach(async(() => {
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
