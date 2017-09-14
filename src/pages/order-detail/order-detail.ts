import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { OrderdetailserviceProvider } from "./order-detail.service";
import { OrderDetailModel } from "./order-detail.model";

/**
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  orderID: any;
  itemID: any;
  orderdetailData: OrderDetailModel = new OrderDetailModel;
  indexItem: any = 0;
  statusTab: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdetailserviceProvider: OrderdetailserviceProvider, public alertCtrl: AlertController, public loading: LoadingController) {
    this.orderID = navParams.get('order_id');
    this.itemID = navParams.get('item_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
    this.orderdetailserviceProvider.getData(this.orderID,this.itemID).then(data => {
      this.orderdetailData = data;
      console.log(data);
    })
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Ref. ID',
      message: "Please Enter Your Ref. ID",
      inputs: [
        {
          name: 'refid',
          placeholder: 'Ref. ID'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            this.orderdetailData.status = 'sent';
            this.updateOrder(this.orderdetailData);
          }
        }
      ]
    });
    prompt.present();
  }

  updateStatus(status) {
    var updateStatus = '';
    if (status === 'waiting') {
      updateStatus = 'accept';
    } else if (status === 'accept') {
      updateStatus = 'sent';
    } else if (status === 'sent') {
      updateStatus = 'complete';
    } else {
      updateStatus = status;
    }
    if (status === 'accept') {
      this.showPrompt();
    } else {
      this.orderdetailData.status = updateStatus;
      console.log(this.orderdetailData);
      this.updateOrder(this.orderdetailData);
    }

    // this.orderdetailserviceProvider
    //   .updateStatusOrder(this.orderdetailData)
    //   .then((data) => {
    //     this.navCtrl.pop();
    //   }, (err) => {
    //     console.log(err);
    //   });
  }

  updateStatusReject() {
    this.orderdetailData.status = 'reject';
    // console.log(this.orderdetailData);
    // this.updateOrder(this.orderdetailData);
  }

  updateOrder(data) {
    console.log(this.orderdetailData);
    let loading = this.loading.create();
    loading.present();
    this.orderdetailserviceProvider
      .updateStatusOrder(this.orderdetailData, this.orderdetailData)
      .then((data) => {
        this.navCtrl.pop();
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
      });
  }

}
