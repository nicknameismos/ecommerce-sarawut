import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderModel } from "./order.model";
import { Constants } from "../../app/app.contants";
/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderServiceProvider {

  constructor(public http: Http) {
    console.log('Hello OrderServiceProvider Provider');
  }

  getData() {
    return this.http.get(Constants.URL + '/api/getordersbyshop')
    // return this.http.get('./assets/example_data/order.json')
      .toPromise()
      .then(resp => resp.json())
      .catch(err => Promise.reject(err.message || err));
  }


}
