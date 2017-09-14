import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { CheckoutServiceProvider } from './checkout.service';
import { address } from './checkout.model';
import { addressModel } from './checkout.model';
import { paymentModel } from './checkout.model';
import { ShippingModel } from './checkout.model';

import { CheckoutModel } from './checkout.model';

// import { confirmModel } from './checkout.model';
import { CompleteOrderedPage } from "../complete-ordered/complete-ordered";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { FormAddressPage } from '../form-address/form-address';


/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  loading: any;
  address: addressModel = new addressModel();
  // address: Array<address>;
  payment: paymentModel = new paymentModel();
  shipping: CheckoutModel = new CheckoutModel();
  // confirm: confirmModel = new confirmModel();
  // addressdata : Array<any> = [];
  datashipping: any = {};
  datapayment: any = {};
  dataconfirm: any = {};
  steps: Array<any> = [
    {
      value: 1,
      title: "SHIPPING"
    },
    {
      value: 2,
      title: "PAYMENT"
    },
    {
      value: 3,
      title: "CONFIRM"
    }
  ];
  currentstep: number = 1;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public checkoutServiceProvider: CheckoutServiceProvider,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider,
    public modalCtrl: ModalController
  ) {
    this.loading = loadingCtrl.create();
  }

  ionViewWillEnter() {
    this.authorizeProvider.isAuthorization();
    let user = this.authorizeProvider.getAuthorization()
    if (user) {
      this.getShippingData();
      this.getAddressData();
      this.getPayment();
    }
  }

  ionViewDidLeave() {
    this.log.info('ionViewDidLoad CheckoutPage');
    let user = this.authorizeProvider.getAuthorization()
    if (user && this.shipping._id) {
      // this.updateCartDataService();
    }
  }

  getShippingData() {
    this.checkoutServiceProvider.getData().then((data) => {
      this.shipping = data;
      console.log(this.shipping);
      this.loading.dismiss();
    }, (error) => {
      this.log.error(error);
      this.loading.dismiss();
    });
  }
  getAddressData() {
    this.checkoutServiceProvider.getAddressData().then((data) => {
      this.address = data;
      this.loading.dismiss();
    }, (error) => {
      this.log.error(error);
      this.loading.dismiss();
    });
  }

  // getConfirm() {
  //   this.checkoutServiceProvider.getConfirm().then((data) => {
  //     this.confirm = data;
  //     this.log.info(this.confirm);
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }
  getPayment() {
    this.checkoutServiceProvider.getPayment().then((data) => {
      this.payment = data;
      console.log(this.payment);
      this.log.info(this.payment);
    }, (err) => {
      this.log.error(err);
    });
  }
  // getAddress() {
  //   this.checkoutServiceProvider
  //     .getAddress()
  //     .then((data) => {
  //       this.address = data;
  //       this.log.info(this.address);
  //     }, (err) => {
  //       this.log.error(err);
  //     });
  // }
  // getShipping() {
  //   this.checkoutServiceProvider
  //     .getShipping()
  //     .then((data) => {
  //       this.shipping = data;
  //       this.log.info(this.shipping);
  //     }, (err) => {
  //       this.log.error(err);
  //     });
  // }

  completedShippingStep(e) {
    this.datashipping = e;
    // alert('completedShippingStep');
    this.currentstep += 1;
  }

  completedPaymentStep(e) {
    this.datapayment = e;
    // alert('completedPaymentStep');
    this.currentstep += 1;
  }

  completedConfirmStep(e) {
    this.dataconfirm = e;
    console.log(this.dataconfirm);
    if (this.dataconfirm && this.dataconfirm.order) {
      this.checkoutServiceProvider.saveOrderData(this.dataconfirm).then((data) => {
        this.navCtrl.push(CompleteOrderedPage);
      }, (error) => {
        this.log.error(error);
      });
    }
    // let loading = this.loadingCtrl.create();
    // loading.present();
    // this.checkoutServiceProvider.saveOrderData(this.dataconfirm).then((data) => {
    //   this.navCtrl.push(CompleteOrderedPage);
    //   loading.dismiss();
    // }, (error) => {
    //   console.error(error);
    //   loading.dismiss();
    // });
  }
  openFormAddress(e) {
    let modal = this.modalCtrl.create(FormAddressPage);
    // Getting data from the modal:
    modal.onDidDismiss(data => {
      this.checkoutServiceProvider.saveAddressData(data).then(resp => {
        this.getAddressData();
      })
      console.log(data);

    });
    modal.present();
  }

}
