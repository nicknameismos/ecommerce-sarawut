import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

// import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { HomePage } from "../pages/home/home";

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TabsNavigationPage } from "../pages/tabs-navigation/tabs-navigation";
import { LoginPage } from "../pages/login/login";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { CartService } from "../pages/cart/cart.service";
import { Constants } from "./app.contants";


@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  //rootPage: any = WalkthroughPage;
  // rootPage: any = FunctionalitiesPage;
  rootPage: any = TabsNavigationPage;
  //rootPage: any = ProductDetailPage;
  textDir: string = "ltr";

  pages: Array<{ title: any, icon: string, component: any }>;
  pushPages: Array<{ title: any, icon: string, component: any }>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController,
    public cartService: CartService
  ) {
    translate.setDefaultLang(Constants.locale);
    translate.use(Constants.locale);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
        platform.setDir('ltr', false);
      }
      else {
        platform.setDir('ltr', true);
        platform.setDir('rtl', false);
      }

    });

    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    if (user) {
      this.getCartDataService();
    }
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }

  getCartDataService() {
    this.cartService.getData().then((data) => {
      window.localStorage.setItem('cart', JSON.stringify(data));
    }, (error) => {
      console.error(error);
    });
  }
}
