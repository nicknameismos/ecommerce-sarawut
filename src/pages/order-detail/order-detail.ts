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
  orderdetailData: OrderDetailModel = new OrderDetailModel();
  indexItem: any = 0;
  statusTab: string = '';
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdetailserviceProvider: OrderdetailserviceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('item');
    this.orderdetailData = this.selectedItem;
    this.orderID = this.selectedItem.order_id;
    this.itemID = this.selectedItem.item_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
    // this.orderdetailserviceProvider.getData(this.selectedItem.order_id).then(data => {
    //   this.orderdetailData = data;
    //   console.log(data);
    // })
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
            let loadingCtrl = this.loadingCtrl.create();
            loadingCtrl.present();
            this.orderdetailserviceProvider.updateStatusSent(this.selectedItem).then((data) => {
              loadingCtrl.dismiss();
              this.navCtrl.pop();
            }, (err) => {
              loadingCtrl.dismiss();
              console.log(err);
            });
          }
        }
      ]
    });
    prompt.present();
  }

  updateStatus(status) {
    var updateStatus = '';
    if (status === 'waiting') {
      let loadingCtrl = this.loadingCtrl.create();
      loadingCtrl.present();
      this.orderdetailserviceProvider.updateStatusAccept(this.selectedItem).then((data) => {
        loadingCtrl.dismiss();
        this.navCtrl.pop();
      }, (err) => {
        loadingCtrl.dismiss();
        console.log(err);
      });
    } else if (status === 'accept') {
      this.showPrompt();
    } else if (status === 'sent') {
      let loadingCtrl = this.loadingCtrl.create();
      loadingCtrl.present();
      this.orderdetailserviceProvider.updateStatusComplete(this.selectedItem).then((data) => {
        loadingCtrl.dismiss();
        this.navCtrl.pop();
      }, (err) => {
        loadingCtrl.dismiss();
        console.log(err);
      });
    }
    else if (status === 'return') {
      let loadingCtrl = this.loadingCtrl.create();
      loadingCtrl.present();
      this.orderdetailserviceProvider.updateStatusReturn(this.selectedItem).then((data) => {
        loadingCtrl.dismiss();
        this.navCtrl.pop();
      }, (err) => {
        loadingCtrl.dismiss();
        console.log(err);
      });
    }
  }

  updateStatusReject() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.orderdetailserviceProvider.updateStatusReject(this.selectedItem).then((data) => {
      loadingCtrl.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      loadingCtrl.dismiss();
      console.log(err);
    });
  }



}
