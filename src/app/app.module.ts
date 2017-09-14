import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { HomePage } from "../pages/home/home";


import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
// import { Rating } from '../components/rating/rating';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
// import { GoogleMap } from '../components/google-map/google-map';

// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
// import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
// import { GoogleMapsService } from '../pages/maps/maps.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { Facebook } from '@ionic-native/facebook';
import { SocialSharing } from '@ionic-native/social-sharing';
// Functionalities
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
// import { MapsPage } from '../pages/maps/maps';
// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
// import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
// import { ContactCardPage } from '../pages/contact-card/contact-card';
// import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';
import { TopbarComponent } from '../components/topbar/topbar';
import { ListItemsComponent } from '../components/list-items/list-items';
import { LanguageService } from '../providers/language/language.service';
import { TabsNavigationPage } from "../pages/tabs-navigation/tabs-navigation";
import { SearchPage } from "../pages/search/search";
import { CartPage } from "../pages/cart/cart";
import { ProfilePage } from "../pages/profile/profile";
import { FavoritePage } from "../pages/favorite/favorite";
import { ListScollXComponent } from '../components/list-scoll-x/list-scoll-x';
import { ListGridComponent } from '../components/list-grid/list-grid';
import { AdsHeaderBarComponent } from '../components/ads-header-bar/ads-header-bar';
import { HomeService } from "../pages/home/home.service";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { ShopDetailPage } from "../pages/shop-detail/shop-detail";
import { TestComponent } from '../components/test/test';
import { CartService } from "../pages/cart/cart.service";
import { SearchServiceProvider } from '../pages/search/search.service';
import { FavoriteServiceProvider } from '../pages/favorite/favorite.service';
import { ProfileServiceProvider } from '../pages/profile/profile.service';
import { ListProductServiceProvider } from '../pages/list-product/list-product.service';
import { ListProductPage } from '../pages/list-product/list-product';
import { ListShopsComponent } from '../components/list-shops/list-shops';
import { ListShopServiceProvider } from '../pages/list-shop/list-shop.service';
import { ListShopPage } from '../pages/list-shop/list-shop';
import { ProductDetailServiceProvider } from '../pages/product-detail/product-detail.service';
import { ShopDetailServiceProvider } from '../pages/shop-detail/shop-detail.service';
import { CartListComponent } from '../components/cart-list/cart-list';
import { LogServiceProvider } from '../providers/log-service/log-service';
import { SearchbarComponent } from '../components/searchbar/searchbar';
import { AuthorizeProvider } from "../providers/authorize/authorize";
import { LoginPage } from "../pages/login/login";
import { LoginServiceProvider } from "../pages/login/login.service";
import { RegisterPage } from "../pages/register/register";
import { RegisterServiceProvider } from "../pages/register/register.service";
import { SlideTabsComponent } from '../components/slide-tabs/slide-tabs';
import { ImageListComponent } from '../components/image-list/image-list';
import { CheckoutPage } from "../pages/checkout/checkout";
import { FormWizardComponent } from '../components/form-wizard/form-wizard';
import { ShippingComponent } from '../components/shipping/shipping';
import { CheckoutServiceProvider } from "../pages/checkout/checkout.service";
import { IonFormWizardComponent } from '../components/ion-form-wizard/ion-form-wizard';
import { IonFormWizardStepComponent } from '../components/ion-form-wizard-step/ion-form-wizard-step';
import { PaymentComponent } from '../components/payment/payment';
import { ConfirmComponent } from '../components/confirm/confirm';
import { CompleteOrderedPage } from "../pages/complete-ordered/complete-ordered";
import { FacebookLoginService } from "../pages/facebook-login/facebook-login.service";
import { VoucherPage } from '../pages/voucher/voucher';
import { CreditComponent } from '../components/credit/credit';
import { DeliveryComponent } from '../components/delivery/delivery';
import { CounterserviceComponent } from '../components/counterservice/counterservice';
import { IonStepsComponent } from '../components/ion-steps/ion-steps';
import { IonPaymentsComponent } from '../components/ion-payments/ion-payments';
import { TopbarshopComponent } from '../components/topbarshop/topbarshop';
import { SlideImagesComponent } from '../components/slide-images/slide-images';
import { WriteReviewPage } from "../pages/write-review/write-review";
import { ShopFormPage } from '../pages/shop-form/shop-form';
import { ReviewComponent } from '../components/review/review';
import { ProductFormPage } from "../pages/product-form/product-form";
import { NotificationsServiceProvider } from '../pages/notifications/notifications.service';
import { NotificationsPage } from "../pages/notifications/notifications";
import { HistoriesServiceProvider } from '../pages/histories/histories.service';
import { HistoriesPage } from "../pages/histories/histories";
import { LocationsServiceProvider } from '../pages/locations/locations.service';
import { LocationsPage } from "../pages/locations/locations";
import { SettingServiceProvider } from '../pages/setting/setting.service';
import { SettingPage } from "../pages/setting/setting";
import { LangaugeServiceProvider } from '../pages/langauge/langauge.service';
import { LangaugePage } from "../pages/langauge/langauge";
import { PolicyServiceProvider } from '../pages/policy/policy.service';
import { PolicyPage } from "../pages/policy/policy";
import { HelpServiceProvider } from '../pages/help/help.service';
import { HelpPage } from "../pages/help/help";
import { MomentPipe } from '../pipes/moment/moment';
import { ProductFormServiceProvider } from "../pages/product-form/product-form-service";
import { FormAddressPage } from '../pages/form-address/form-address';
import { OrderPage } from '../pages/order/order';
import { NotificationPage } from '../pages/notification/notification';
import { NotificationserviceProvider } from '../pages/notification/notification.service';
import { ListNotificationComponent } from '../components/list-notification/list-notification';
// import { RegisterServiceProvider } from "../pages/checkout/";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    TabsNavigationPage,
    HomePage,
    SearchPage,
    CartPage,
    ProfilePage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    CompleteOrderedPage,
    VoucherPage,
    WriteReviewPage,
    ShopFormPage,
    ProductFormPage,
    NotificationsPage,
    HistoriesPage,
    LocationsPage,
    SettingPage,
    LangaugePage,
    PolicyPage,
    HelpPage,
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    // Rating,
    // GoogleMap,
    ListScollXComponent,
    ListGridComponent,
    AdsHeaderBarComponent,
    TestComponent,
    TopbarComponent,
    ListItemsComponent,
    ListProductPage,
    ListShopPage,
    ListShopsComponent,
    CartListComponent,
    SearchbarComponent,
    SlideTabsComponent,
    ImageListComponent,
    FormWizardComponent,
    ShippingComponent,
    IonFormWizardComponent,
    IonFormWizardStepComponent,
    PaymentComponent,
    ConfirmComponent,
    CreditComponent,
    DeliveryComponent,
    CounterserviceComponent,
    IonStepsComponent,
    IonPaymentsComponent,
    TopbarshopComponent,
    SlideImagesComponent,
    ReviewComponent,
    MomentPipe,
    FormAddressPage,
    OrderPage,
    NotificationPage,
    ListNotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalkthroughPage,
    TabsNavigationPage,
    HomePage,
    SearchPage,
    CartPage,
    ProfilePage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    ListProductPage,
    ListShopPage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    CompleteOrderedPage,
    VoucherPage,
    WriteReviewPage,
    ShopFormPage,
    ProductFormPage,
    NotificationsPage,
    HistoriesPage,
    LocationsPage,
    SettingPage,
    LangaugePage,
    PolicyPage,
    HelpPage,
    FormAddressPage,
    OrderPage,
    NotificationPage
  ],
  providers: [
    HomeService,
    CartService,
    // GoogleMapsService,
    LanguageService,

    SplashScreen,
    StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
    AdMobFree,
    AppRate,
    ImagePicker,
    Crop,
    EmailComposer,
    SearchServiceProvider,
    FavoriteServiceProvider,
    ProfileServiceProvider,
    ListProductServiceProvider,
    ListShopServiceProvider,
    ProductDetailServiceProvider,
    ShopDetailServiceProvider,
    LogServiceProvider,
    AuthorizeProvider,
    LoginServiceProvider,
    RegisterServiceProvider,
    CheckoutServiceProvider,
    FacebookLoginService,
    NotificationsServiceProvider,
    HistoriesServiceProvider,
    LocationsServiceProvider,
    SettingServiceProvider,
    LangaugeServiceProvider,
    PolicyServiceProvider,
    HelpServiceProvider,
    ProductFormServiceProvider,
    NotificationserviceProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
