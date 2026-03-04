import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.page.html',
  styleUrls: ['./diagnostic.page.scss'],
})
export class DiagnosticPage {
  constructor(
    private toastController: ToastController,
    private translate: TranslateService
  ) {}

  async copyLink() {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        const toast = await this.toastController.create({
          message: this.translate.instant('appComponent.urlCopied'),
          duration: 3000,
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
      } catch {
        await this.showFallback(url);
      }
    } else {
      await this.showFallback(url);
    }
  }

  private async showFallback(url: string) {
    const toast = await this.toastController.create({
      message: `${this.translate.instant('appComponent.copyUrlManually')}: ${url}`,
      duration: 8000,
      position: 'bottom',
      color: 'warning',
    });
    await toast.present();
  }
}
