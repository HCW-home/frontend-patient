import { Component, OnInit, Input, Directive  } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FilePicker } from '@capawesome/capacitor-file-picker';

//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../../../auth/auth.service';

import { environment } from '../../../../environments/environment';


@Directive()
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
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  async pickFiles () {
    const result = await FilePicker.pickFiles({
      // types: ['image/png'],
      types: ['image/png', 'application/pdf', 'image/jpg', 'image/jpeg'],
      multiple: false,
    });
  };

  async chooseFile() {
    if (this.platform.is('desktop') || environment.platform !== 'native') {
      this.chooseFileBrowser().then((file) => {
        this.dismiss(file, 'file')
      })
    } else {
    
       FilePicker.pickFiles()
        .then((uri) => {
          this.dismiss(uri.files[0], 'file');
        })
        .catch(e => console.log(e));
    }
  }

  dismiss(filePath?, type?) {   
    this.modalController.dismiss({
      filePath,
      type:type
    });
  }


  async takePicture() {

    // const options: CameraOptions = {
    //   quality: 40,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   //targetWidth: 720
    // };

    // this.camera.getPicture(options).then((imageData) => {

    //   this.dismiss(imageData, 'image');
    // }, (err) => {
    //   console.log('error choosing image', err);
    //   // if (err && .includes('No Image Selected')) {
    //   //   return
    //   // }
    //   alert('Error choosing image ' + err);
    // });
    const image =  await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelPhoto: 'Depuis la gallerie',
      promptLabelPicture: 'Depuis la camera'
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
    return environment.platform === 'native'
  }
}
