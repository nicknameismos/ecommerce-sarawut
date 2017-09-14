import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";

@Component({
  selector: 'images-layout-upload-x',
  templateUrl: 'images-layout-upload-x.html'
})
export class ImagesLayoutUploadXComponent {
  public imageList: Array<any> = [];
  @Input() maxImage: number;
  @Output() imageOutList: EventEmitter<any> = new EventEmitter<any>();

  constructor(public imagePicker: ImagePicker, public base64: Base64) {

  }

  selectImage() {
    if (this.imageList.length < this.maxImage) {
      let options = {
        maximumImagesCount: 1,
        width: 1080,
        height: 1080,
        quality: 80
      };

      if (this.imagePicker.hasReadPermission()) {
        this.imagePicker.getPictures(options).then((results) => {
          if (results.length > 0) {
            this.convertImgUrlToBase64(results[0]);
          }
        }, (err) => {
          alert('Message ERROR Get Pictures' + err);
        });
      } else {
        this.imagePicker.requestReadPermission().then(() => {
          this.imagePicker.getPictures(options).then((results) => {
            if (results.length > 0) {
              if (results.length > 0) {
                this.convertImgUrlToBase64(results[0]);
              }
            }
          }, (err) => {
            alert('Message ERROR Get Pictures' + err);
          });

        }, (err) => {
          alert('Message ERROR Request Read Permission' + err);
        });
      }
    } else {
      alert(`คุณเลือกรูปครบ ${this.maxImage} รูปแล้ว`);
    }
  }

  convertImgUrlToBase64(imgUrl: any) {
    this.base64.encodeFile(imgUrl).then((base64File: string) => {
      let base64img = base64File.replace(/\n/g, '');
      base64img = base64File.replace('data:image/*;charset=utf-8;base64,', 'data:image/jpg;base64,');
      let id = new Date();
      this.imageList.push({
        id: id,
        imgUrl: imgUrl,
        base64: base64img
      });
      this.imageOutList.emit(this.imageList);
    }, (err) => { });
  }

  deleteImage(imgID) {
    for (let i = 0; i < this.imageList.length; i++) {
      if (this.imageList[i].id == imgID) {
        this.imageList.splice(i, 1);
        break;
      }
    }
    this.imageOutList.emit(this.imageList);
  }

}
