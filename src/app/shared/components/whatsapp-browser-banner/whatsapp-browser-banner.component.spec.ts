import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsappBrowserBannerComponent } from './whatsapp-browser-banner.component';

describe('WhatsappBrowserBannerComponent', () => {
  let component: WhatsappBrowserBannerComponent;
  let fixture: ComponentFixture<WhatsappBrowserBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappBrowserBannerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappBrowserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
