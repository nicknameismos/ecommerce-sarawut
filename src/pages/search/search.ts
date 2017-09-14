import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SearchServiceProvider } from './search.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { SearchModel } from "./search.model";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchData: SearchModel = new SearchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchServiceProvider: SearchServiceProvider, public log: LogServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad SearchPage');
    this.getSearchData();
  }

  getSearchData() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.searchServiceProvider.getData().then((data) => {
      this.searchData = data;
      // window.localStorage.setItem('array', JSON.stringify(this.searchData));
      this.log.info(this.searchData);
      loading.dismiss();
    }, (error) => {
      this.log.error(error);
      loading.dismiss();
    });
  }

  // searchInput(e) {
  //   if (e && e == 'reload') {
  //     this.getSearchData();
  //   } else {
  //     this.searchData.items = e;
  //   }
  // }

  selectedItem(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

}
