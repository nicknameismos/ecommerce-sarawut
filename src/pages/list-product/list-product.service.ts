import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
import { ListProductViewModel } from "./list-product.model";
import { ProductModel } from "../product-form/product-form.model";
// import { ProductItemModel } from "../../app/app.model";

/*
  Generated class for the ListProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListProductServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ListProductServiceProvider Provider');
  }
  getProductList(): Promise<ListProductViewModel> {
    //return this.http.get(Constants.URL + '/api/productlistbytitle/Productlist')
    return this.http.get(Constants.URL + '/api/products')
      .toPromise()
      .then(response => response.json() as ListProductViewModel)
      .catch(this.handleError);
  }

  postProduct(product): Promise<ProductModel> {
    return this.http.post(Constants.URL + '/api/products', product)
      .toPromise()
      .then(response => response.json() as ProductModel)
      .catch(this.handleError);
  }
  // getProductListByHome(view): Promise<ListProductModel> {
  //   // return this.http.get(Constants.URL + '/api/getproducttop/' + view)
  //   return this.http.get('./assets/example_data/listproduct.json' + view)

  //     .toPromise()
  //     .then(response => response.json() as ListProductModel)
  //     .catch(this.handleError);
  // }

  // getProductListByShop(data): Promise<ListProductModel> {
  //   // return this.http.get(Constants.URL + '/api/productsbycategorybyshop/all/' + data._id)
  //   return this.http.get('./assets/example_data/listproduct.json' + data._id)

  //     .toPromise()
  //     .then(response => response.json() as ListProductModel)
  //     .catch(this.handleError);
  // }

  // getProductListByShop(data): Promise<Array<ProductItemModel>> {
  //   return this.http.get(Constants.URL + '/api/productsbycategorybyshop/all/' + data._id)
  //     .toPromise()
  //     .then(response => response.json() as Array<ProductItemModel>)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
