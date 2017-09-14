import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartService } from "./cart.service";
import { CartViewModel } from "./cart.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { CheckoutPage } from "../checkout/checkout";


/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartData: CartViewModel = new CartViewModel();
  counterForm: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider
  ) {
    this.counterForm = new FormGroup({
      counter: new FormControl()
    });
  }

  ionViewWillEnter() {
    this.authorizeProvider.isAuthorization();
    let user = this.authorizeProvider.getAuthorization()
    if (user) {
      this.cartData = JSON.parse(window.localStorage.getItem('cart'));
      if (!this.cartData) {
        this.getCartData();
      }
      console.log(this.cartData);
    }
  }

  ionViewDidLeave() {
    let user = this.authorizeProvider.getAuthorization()
    if (user && this.cartData.cart) {
      this.updateCartDataService();
    }
  }

  getCartData() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.cartService.getData().then((data) => {
      this.cartData = data;
      window.localStorage.setItem('cart', JSON.stringify(data));
      loading.dismiss();
    }, (error) => {
      this.log.error(error);
      loading.dismiss();
    });
  }

  updateCartDataService() {
    this.cartService.updateCartData(this.cartData.cart).then((data) => {
      window.localStorage.setItem('cart', JSON.stringify(data));
      console.log(data);
    }, (error) => {
      console.error(error);
    });
  }

  gotocheckout() {
    this.navCtrl.push(CheckoutPage)
  }

  deleteItem(e) {
    this.cartData.cart.items.splice(e.index, 1);
    this.onCalculate();
  }

  changeQtyItem(e) {
    this.onCalculate();
  }

  onCalculate() {
    let length = this.cartData.cart.items.length;
    this.cartData.cart.amount = 0;
    this.cartData.cart.discount = 0;
    this.cartData.cart.totalamount = 0;

    for (var i = 0; i < length; i++) {
      // By Check promotionprice
      let price = this.cartData.cart.items[i].product.promotionprice ? this.cartData.cart.items[i].product.promotionprice : this.cartData.cart.items[i].product.price;
      // By Items
      this.cartData.cart.items[i].amount = this.cartData.cart.items[i].product.price * this.cartData.cart.items[i].qty;
      this.cartData.cart.items[i].discount = (this.cartData.cart.items[i].product.price - price) * this.cartData.cart.items[i].qty;
      this.cartData.cart.items[i].totalamount = this.cartData.cart.items[i].amount - this.cartData.cart.items[i].discount;
      // By Cart
      this.cartData.cart.amount += this.cartData.cart.items[i].amount;
      this.cartData.cart.discount += this.cartData.cart.items[i].discount;
      this.cartData.cart.totalamount += this.cartData.cart.items[i].totalamount;
    }
  }
}
