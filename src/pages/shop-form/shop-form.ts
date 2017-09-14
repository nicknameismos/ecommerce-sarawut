import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShopModel } from '../shop-form/shop-form.model';
import { ShopFormServiceProvider } from './shop-form.service';
/**
 * Generated class for the ShopFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop-form',
  templateUrl: 'shop-form.html',
})
export class ShopFormPage {
  images: Array<any> = [];
  shop: ShopModel = new ShopModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public shopFormServiceProvider: ShopFormServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopFormPage');
  }
  logForm() {
    this.shopFormServiceProvider.uploadImage(this.images).then(data => {
      // alert('image' + JSON.stringify(data));
      this.shop.image = data && data.length > 0 ? data[0].imgURL : '';
      this.viewCtrl.dismiss(this.shop);
      // alert('data' + data);
    })
    // console.log(this.shop)
    // this.viewCtrl.dismiss(this.shop);
  }
  dismiss() {
    // console.log(this.shop);
    this.viewCtrl.dismiss();
  }
  uploadImage(e) {
    this.images = e;
  }
}
