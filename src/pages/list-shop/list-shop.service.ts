import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ListShopModel } from '../list-shop/list-shop.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
import { ShopItemModel } from "../../app/app.model";
import { ShopModel } from '../shop-form/shop-form.model';
/*
  Generated class for the ListShopServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListShopServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ListShopServiceProvider Provider');
  }
  getListShop(): Promise<ListShopModel> {
    //return this.http.get(Constants.URL + '/api/shopmasters')
    // return this.http.get('./assets/example_data/listshop.json')
    return this.http.get(Constants.URL + '/api/shops')
      .toPromise()
      .then(response => response.json() as ListShopModel)
      .catch(this.handleError);
  }
  addShop(shop): Promise<ShopModel> {
    //return this.http.get(Constants.URL + '/api/shopmasters')
    return this.http.post(Constants.URL + '/api/shops', shop)
      .toPromise()
      .then(response => shop as ShopModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
