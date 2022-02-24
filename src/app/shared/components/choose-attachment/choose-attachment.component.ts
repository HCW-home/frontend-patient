import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../../../auth/auth.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-choose-attachment',
  templateUrl: './choose-attachment.component.html',
  styleUrls: ['./choose-attachment.component.scss']
})
export class ChooseAttachmentComponent implements OnInit {
  @Input() consultationId;
  currentUser;
  constructor(
    private fileChooser: FileChooser,
    public modalController: ModalController,
    private authService: AuthService,
    private camera: Camera,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }


  chooseFile() {
    if (this.platform.is('desktop') || environment.platform !== 'native') {
      this.chooseFileBrowser().then((file) => {
        this.dismiss(file, 'file')
      })
    } else {
    
      this.fileChooser.open()
        .then(uri => {
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
