import { Component, OnInit, Input, Directive  } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FilePicker } from '@capawesome/capacitor-file-picker';

//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../../../auth/auth.service';

import { environment } from '../../../../environments/environment';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-choose-attachment',
  templateUrl: './choose-attachment.component.html',
  styleUrls: ['./choose-attachment.component.scss']
})
export class ChooseAttachmentComponent implements OnInit {
  @Input() consultationId;
  photo: SafeResourceUrl;
  currentUser;
  constructor(
    public modalController: ModalController,
    private authService: AuthService,
    public platform: Platform,
    private sanitizer: DomSanitizer,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  async pickFiles () {
    const result = await FilePicker.pickFiles({
      // types: ['image/png'],
      types: ['application/pdf'],
      multiple: false,
    });
  };

  async chooseFile() {
    FilePicker.pickFiles()
    .then((uri) => {
      this.dismiss(uri.files[0], 'file');
    })
    .catch(e => console.log(e));
  }

  dismiss(filePath?, type?) {   
    this.modalController.dismiss({
      filePath,
      type:type
    });
  }


  async takePicture() {
    const image =  await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelPhoto: this.translate.instant('chooseAttachement.promptLabelPhoto'),
      promptLabelPicture: this.translate.instant('chooseAttachement.promptLabelPicture')
    });
    
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    
    this.dismiss(this.photo, 'file');
  
  }
  chooseFileBrowser() {
    return new Promise((resolve, reject) => {
    
      const inputElement = document.getElementById("input-file");
      inputElement.addEventListener("change", function () { 
        resolve((this as HTMLInputElement).files[0])
      }, false);
      inputElement.click();
    })
  }
  isNativeApp() {
    return !this.platform.is('mobileweb') && ( this.platform.is('ios') || this.platform.is('android'));
  }
}
