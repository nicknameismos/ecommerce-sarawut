import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CartViewModel } from "./cart.model";
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";

@Injectable()
export class CartService {
  constructor(public http: Http, public log: LogServiceProvider) {

  }

  getData(): Promise<CartViewModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    // return this.http.get('./assets/example_data/cart.json')
    // return this.http.get(Constants.URL + '/api/carts/get-by-user/' + user._id)
    return this.http.get(Constants.URL + '/api/cart/user/' + user._id)

      .toPromise()
      .then(response => response.json() as CartViewModel)
      .catch(this.handleError);
  }

  updateCartData(cart): Promise<CartViewModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    cart.user = user;
    // return this.http.post(Constants.URL + '/api/carts', cart)
    return this.http.post(Constants.URL + '/api/carts', cart)
      .toPromise()
      .then(response => response.json() as CartViewModel)
      .catch(this.handleError);
  }

  cookingLocalCart(product) {

    let localCart = JSON.parse(window.localStorage.getItem('cart'));

    if (!localCart.cart) {
      localCart.cart = {
        items: []
      }
    }

    let productObj = localCart.cart.items.filter(function (obj) { return obj.product._id === product._id });

    if (productObj[0]) {
      productObj[0].qty++;
    } else {
      localCart.cart.items.push({
        product: product,
        qty: 1,
        amount: product.price,
        discount: product.price - product.promotionprice,
        totalamount: product.promotionprice
      });
    }

    localCart.cart.amount = 0;
    localCart.cart.discount = 0;
    localCart.cart.totalamount = 0;

    for (var i = 0; i < localCart.cart.items.length; i++) {
      let price = localCart.cart.items[i].product.promotionprice ? localCart.cart.items[i].product.promotionprice : localCart.cart.items[i].product.price;
      // By Items
      localCart.cart.items[i].amount = localCart.cart.items[i].product.price * localCart.cart.items[i].qty;
      localCart.cart.items[i].discount = (localCart.cart.items[i].product.price - price) * localCart.cart.items[i].qty;
      localCart.cart.items[i].totalamount = localCart.cart.items[i].amount - localCart.cart.items[i].discount;
      // By Cart
      localCart.cart.amount += localCart.cart.items[i].amount;
      localCart.cart.discount += localCart.cart.items[i].discount;
      localCart.cart.totalamount += localCart.cart.items[i].totalamount;
    }

    window.localStorage.setItem('cart', JSON.stringify(localCart));

    return;
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
