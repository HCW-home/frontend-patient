import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <div id="hhpMultiLang">
      <div (click)="openDropdown()" style="display:flex;">
        <span  [className]="'flag-icon flag-icon-' + (translate.currentLang === 'us' || translate.currentLang === 'en' ? 'us' : translate.currentLang)"></span>&nbsp;
        <span style="    display: flex;  align-items: center;   justify-content: center;">
        <ion-icon *ngIf="opened" name="caret-up-outline"></ion-icon>  
        <ion-icon *ngIf="!opened" name="caret-down-outline"></ion-icon>  
    </span>
      </div>
      <div *ngIf="opened" class="flag-options">
        <div *ngIf="translate.currentLang !== 'en'" (click)="changeLang('en')" class="hhpmlOption"><span class="flag-icon flag-icon-us"></span></div>
        <div *ngIf="translate.currentLang !== 'fr'" (click)="changeLang('fr')" class="hhpmlOption"><span class="flag-icon flag-icon-fr"></span></div>
        <div *ngIf="translate.currentLang !== 'ar'" (click)="changeLang('ar')" class="hhpmlOption"><span class="flag-icon flag-icon-sa"></span></div>
        <div *ngIf="translate.currentLang !== 'es'" (click)="changeLang('es')" class="hhpmlOption"><span class="flag-icon flag-icon-es"></span></div>
      </div>
    </div>
  `,
  styles: [
    `#hhpMultiLang { margin-top: 10px;cursor: pointer;left: calc(50% - 21px); display: flex;     flex-direction: column;
      align-items: center; }
    .flag-icon{
      width: 22px;
      height: 22px;
   
    }
    .flag-options .flag-icon{
      margin-right: 20px;
    }
    `
    
  ]
})
export class SelectLanguageComponent {
  opened = false

  constructor(public translate: TranslateService) {
    console.log(translate.currentLang)
  }

  openDropdown() {
    this.opened = !this.opened
  }

  changeLang(lang) {
    this.openDropdown()
    window.localStorage.setItem('hhp-lang', lang)
    this.translate.use(lang)
  }
}
