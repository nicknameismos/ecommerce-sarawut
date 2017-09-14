import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthorizeProvider } from '../../providers/authorize/authorize';
import { ShopFormPage } from '../shop-form/shop-form';
import { ListShopServiceProvider } from '../list-shop/list-shop.service';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    // console.log(user);
    console.log('ionViewDidLoad HomePage');
  }

}
