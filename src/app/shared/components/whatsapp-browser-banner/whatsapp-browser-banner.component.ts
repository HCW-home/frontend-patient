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
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    const webViewPatterns = [
      /\bwv\b/,
      /WebView/i,
      /WhatsApp/i,
      /WAiOS/i,
      /WAAndroid/i,
      /FB_IAB|FBAN|FBAV/i,
      /Instagram/i,
      /Twitter/i,
      /Line\//i,
      /Snapchat/i,
      /\bTelegram\b/i,
    ];

    const isIOSWebView = /iPhone|iPod|iPad/.test(ua) && !/Safari/.test(ua);
    const isAndroidWebView = /Android/.test(ua) && (/Version\/[\d.]+/.test(ua) || /\bwv\b/.test(ua));

    this.isWhatsAppBrowser = webViewPatterns.some(pattern => pattern.test(ua)) || isIOSWebView || isAndroidWebView;
    this.showBanner = this.isWhatsAppBrowser;
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
