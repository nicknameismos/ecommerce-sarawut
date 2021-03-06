import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NotificationModel } from './notification.model';
import { NotificationserviceProvider } from "../notification/notification.service";
import { ProductDetailPage } from '../product-detail/product-detail';

/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notification: NotificationModel = new NotificationModel();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public notificationServiceProvider: NotificationserviceProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.getData();
  }
  getData() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.notificationServiceProvider.getNotification().then(data => {
      loadingCtrl.dismiss();
      this.notification = data;
    })
  }
  selectedItem() {
    this.navCtrl.push(ProductDetailPage);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
