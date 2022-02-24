import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAttachmentComponent } from './choose-attachment.component';

describe('ChooseAttachmentComponent', () => {
  let component: ChooseAttachmentComponent;
  let fixture: ComponentFixture<ChooseAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseAttachmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
