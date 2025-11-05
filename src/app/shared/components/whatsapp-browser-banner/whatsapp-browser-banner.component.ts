import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-whatsapp-browser-banner',
  templateUrl: './whatsapp-browser-banner.component.html',
  styleUrls: ['./whatsapp-browser-banner.component.scss'],
})
export class WhatsappBrowserBannerComponent implements OnInit {
  isWhatsAppBrowser = false;
  showBanner = false;

  constructor(
    private toastController: ToastController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.detectWhatsAppBrowser();
  }

  detectWhatsAppBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    this.isWhatsAppBrowser = /WhatsApp/i.test(userAgent);
    this.showBanner = this.isWhatsAppBrowser;
  }

  closeBanner() {
    this.showBanner = false;
  }

  async openInBrowser() {
    const currentUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        await this.presentToast(
          this.translate.instant('appComponent.urlCopied'),
          'success'
        );
      } catch (error) {
        await this.showUrlInstructions(currentUrl);
      }
    } else {
      await this.showUrlInstructions(currentUrl);
    }
  }

  private async showUrlInstructions(url: string) {
    await this.presentToast(
      `${this.translate.instant('appComponent.copyUrlManually')}: ${url}`,
      'warning',
      5000
    );
  }

  private async presentToast(message: string, color: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom',
      color,
      buttons: [
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
