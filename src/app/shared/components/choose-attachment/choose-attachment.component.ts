import { Component, OnInit, Input, Directive  } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

import { FilePicker } from '@capawesome/capacitor-file-picker';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
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
  currentUser;
  constructor(
    public modalController: ModalController,
    private authService: AuthService,
    private camera: Camera,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  async pickFiles () {
    const result = await FilePicker.pickFiles({
      types: ['image/png'],
      multiple: true,
    });
  };

  chooseFile() {
    if (this.platform.is('desktop') || environment.platform !== 'native') {
      this.chooseFileBrowser().then((file) => {
        this.dismiss(file, 'file')
      })
    } else {
    
      this.pickFiles()
        .then((uri) => {
          console.log(uri);
          this.dismiss(uri, 'file');
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


  takePicture() {

    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //targetWidth: 720
    };

    this.camera.getPicture(options).then((imageData) => {

      console.log('image data ', imageData);

      this.dismiss(imageData, 'image');
    }, (err) => {
      console.log('error choosing image', err);
      // if (err && .includes('No Image Selected')) {
      //   return
      // }
      alert('Error choosing image ' + err);
    });
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
