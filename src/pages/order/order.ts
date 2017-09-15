import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel } from "../order/order.model";
import { OrderServiceProvider } from "./order.service";
import { OrderDetailPage } from '../../pages/order-detail/order-detail';
/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  orderlistData: OrderModel = new OrderModel();
  channel: number = 1;
  steps: Array<any> = [
    {
      value: 1,
      title: "New Order"
    },
    {
      value: 2,
      title: "Accept"
    },
    {
      value: 3,
      title: "Sent"
    }
    ,
    {
      value: 4,
      title: "Return"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public orderServiceProvider: OrderServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getOrder();
  }
  getOrder() {
    this.orderServiceProvider.getData().then(data => {
      this.orderlistData = data;
      console.log(this.orderlistData);
    })
  }

  selectedItem(e) {
    console.log(e);
    this.navCtrl.push(OrderDetailPage, { items: e });
    // alert(e);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getOrder();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
