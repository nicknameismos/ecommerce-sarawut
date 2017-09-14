import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { OrderDetailModel } from "./order-detail.model";
/*
  Generated class for the OrderdetailserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderdetailserviceProvider {

  constructor(public http: Http) {
    console.log('Hello OrderdetailserviceProvider Provider');
  }
  getData(orderID, itemID): Promise<OrderDetailModel> {
    return this.http.get('./assets/example_data/orderdetail.json')
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));


  }

  updateStatusOrder(order, item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage.herokuapp.com/api/ordermasters/' + order._id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));


  }

}
