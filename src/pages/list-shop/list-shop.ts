import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListShopModel } from '../list-shop/list-shop.model';
import { ListShopServiceProvider } from '../list-shop/list-shop.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { ShopFormPage } from '../shop-form/shop-form';

/**
 * Generated class for the ListShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-shop',
  templateUrl: 'list-shop.html',
})
export class ListShopPage {
  listShopData: ListShopModel = new ListShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public listShopService: ListShopServiceProvider, public log: LogServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListShopPage');
    this.getListShopData();
  }
  getListShopData() {
    this.listShopService.getListShop().then((data) => {
      this.listShopData = data;
      this.log.info(this.listShopData);
    }, (err) => {
      this.log.error(err);
    });
  }

  selectShop(e) {
    this.navCtrl.push(ShopDetailPage, { data: e });
  }
  createShop() {
    let modal = this.modalCtrl.create(ShopFormPage);
    // Getting data from the modal:
    modal.onDidDismiss(data => {
      console.log('MODAL DATA', data);
      this.listShopService.addShop(data)
        .then((resp) => {
          console.log(resp);
          this.getListShopData();
        }, (err) => {
          console.log(err);
        });
    });
    modal.present();
  }


}
