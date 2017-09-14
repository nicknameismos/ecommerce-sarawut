import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductDetailModel } from '../product-detail/product-detail.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ProductDetailServiceProvider Provider');
  }
  // getProductDetail(id): Promise<ProductDetailModel> {
  //   return this.http.get(Constants.URL + '/api/productmasters/' + id)
  //     .toPromise()
  //     .then(response => response.json() as ProductDetailModel)
  //     .catch(this.handleError);
  // }
  getProductDetail(id): Promise<ProductDetailModel> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.get(Constants.URL + '/api/products/' + id)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  postProductReview(id, review): Promise<ProductDetailModel> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.post(Constants.URL + '/api/products/review/' + id, review)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  addToCart(product): Promise<ProductDetailModel> {
    product.selecteduser = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return this.http.post(Constants.URL + '/api/carts/add', product)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  addFavorite(id): Promise<ProductDetailModel> {
    var user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    var favorite = {
      user: user
    };
    return this.http.post(Constants.URL + '/api/products/favorite/' + id, favorite)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
