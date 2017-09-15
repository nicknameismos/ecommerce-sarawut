import { Component } from "@angular/core";
import { HomePage } from "../home/home";
// import { SearchPage } from "../search/search";
// import { CartPage } from "../cart/cart";
import { ProfilePage } from "../profile/profile";
// import { FavoritePage } from "../favorite/favorite";
import { ListProductPage } from "../list-product/list-product";
import { OrderPage } from "../order/order";
import { NotificationPage } from "../notification/notification";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { ModalController } from "ionic-angular";
import { ListShopServiceProvider } from "../list-shop/list-shop.service";
import { ShopFormPage } from "../shop-form/shop-form";

@Component({
  selector: "tabs-navigation",
  templateUrl: "tabs-navigation.html"
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor(
    public authorizeProvider: AuthorizeProvider,
    public modalCtrl: ModalController,
    public listShopService: ListShopServiceProvider
  ) {
    this.tab1Root = HomePage;
    this.tab2Root = OrderPage;
    this.tab3Root = ListProductPage;
    this.tab4Root = NotificationPage;
    this.tab5Root = ProfilePage;
    this.authorizeProvider.isAuthorization();
    var user = this.authorizeProvider.getAuthorization();
    if (user) {
      if (!(user.shops && user.shops.length > 0)) {
        let modal = this.modalCtrl.create(ShopFormPage);
        // Getting data from the modal:
        modal.onDidDismiss(data => {
          if (data) {
            // console.log('MODAL DATA', data);
            this.listShopService.addShop(data).then(
              resp => {
                console.log(resp);
                user.shops = user.shops ? user.shops : [];
                user.shops.push(resp);
                window.localStorage.setItem(
                  "e7e_jjecommerce_buy_user",
                  JSON.stringify(user)
                );
                // this.getListShopData();
              },
              err => {
                console.log(err);
              }
            );
          }
        });
        modal.present();
      }
    }
  }
  countBadgeCart() {
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    let length = 0;
    if (cart && cart.cart) {
      let cartLength = cart.cart.items ? cart.cart.items.length : 0;
      for (let i = 0; i < cartLength; i++) {
        length += cart.cart.items[i].qty;
      }
    }
    return length > 0 ? length.toString() : "";
  }
}
