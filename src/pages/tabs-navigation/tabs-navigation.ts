import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { SearchPage } from "../search/search";
import { CartPage } from "../cart/cart";
import { ProfilePage } from "../profile/profile";
// import { FavoritePage } from "../favorite/favorite";
import { ListProductPage } from "../list-product/list-product";
import { OrderPage } from '../order/order';
import { NotificationPage } from '../notification/notification';


@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = OrderPage;
    this.tab3Root = ListProductPage;
    this.tab4Root = NotificationPage;
    this.tab5Root = ProfilePage;
  }
  countBadgeCart() {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    let length = 0;
    if (cart && cart.cart) {
      let cartLength = cart.cart.items ? cart.cart.items.length : 0;
      for (let i = 0; i < cartLength; i++) {
        length += cart.cart.items[i].qty;
      }
    }
    return length > 0 ? length.toString() : '';
  }
}
