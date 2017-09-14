import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ShopDetailModel } from '../shop-detail/shop-detail.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
import { ProductItemModel } from "../../app/app.model";
/*
  Generated class for the ShopDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopDetailServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ShopDetailServiceProvider Provider');
  }
  // getShopDetail(id): Promise<ShopDetailModel> {
  //   return this.http.get(Constants.URL + '/api/shopmasters/' + id)
  //     .toPromise()
  //     .then(response => response.json() as ShopDetailModel)
  //     .catch(this.handleError);
  // }
  getShopDetail(id): Promise<ShopDetailModel> {
    // return this.http.get('./assets/example_data/shopdetail.json')
    return this.http.get(Constants.URL + '/api/shops/' + id)
      .toPromise()
      .then(response => response.json() as ShopDetailModel)
      .catch(this.handleError);
  }
  writeReview(id, reviewData): Promise<ShopDetailModel> {
    // return this.http.get('./assets/example_data/shopdetail.json')
    return this.http.post(Constants.URL + '/api/shop/review/' + id, reviewData)
      .toPromise()
      .then(response => response.json() as ShopDetailModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
