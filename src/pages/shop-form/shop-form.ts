import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShopModel } from '../shop-form/shop-form.model';
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
  shop: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopFormPage');
  }
  logForm() {
    // console.log(this.shop)
    this.viewCtrl.dismiss(this.shop);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
