import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController ,LoadingController} from 'ionic-angular';
import { ListProductServiceProvider } from '../list-product/list-product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { ProductItemModel } from "../../app/app.model";
import { ListProductViewModel } from "./list-product.model";
import { ProductFormPage } from "../product-form/product-form";
/**
 * Generated class for the ListProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  // listProductData: Array<ProductItemModel>;
  listProductData: ListProductViewModel = new ListProductViewModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public listProductService: ListProductServiceProvider, public log: LogServiceProvider, public modalCtrl: ModalController, public listProductServiceProvider: ListProductServiceProvider,public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListProductPage');
    // let view = this.navParams.get('view');
    // if (view === 'shop') {
    //   let data = this.navParams.get('data');
    //   this.getListProductByShop(data);
    // } else {
    //   this.getListProductByHome(view);
    // }
    this.getListProduct();
  }
  getListProduct() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.listProductService.getProductList().then(data => {
      loadingCtrl.dismiss();
      this.listProductData = data;
    }, (err) => {
      loadingCtrl.dismiss();
      this.log.error(err);
    })
  }
  // getListProductByShop(data) {
  //   this.listProductService.getProductListByShop(data).then((data) => {
  //     this.listProductData = data;
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }

  // getListProductByHome(view) {
  //   this.listProductService.getProductListByHome(view).then((data) => {
  //     this.listProductData = data;
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }

  selectedItem(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

  openModal() {
    let modal = this.modalCtrl.create(ProductFormPage);
    modal.onDidDismiss((data) => {
      console.log(data);
      let loadingCtrl = this.loadingCtrl.create();
      loadingCtrl.present();
      this.listProductServiceProvider.postProduct(data.data).then((res) => {
        loadingCtrl.dismiss();
        console.log('OK');
        this.getListProduct();
      }, (error) => {
        loadingCtrl.dismiss();
        console.error(error);
      })
    })
    modal.present();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getListProduct();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
