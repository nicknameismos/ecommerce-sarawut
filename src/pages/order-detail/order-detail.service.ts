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
  updateStatusAccept(item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage-v1.herokuapp.com/api/updateorderaccept/' + item.order_id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));
  }
  updateStatusReject(item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage-v1.herokuapp.com/api/updateorderreject/' + item.order_id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));
  }
  updateStatusSent(item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage-v1.herokuapp.com/api/updateordersent/' + item.order_id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));
  }
  updateStatusComplete(item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage-v1.herokuapp.com/api/updateordercomplete/' + item.order_id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));
  }
  updateStatusReturn(item): Promise<OrderDetailModel> {
    return this.http.put('https://greenvintage-v1.herokuapp.com/api/updateorderreturn/' + item.order_id, item)
      .toPromise()
      .then(resp => resp.json() as OrderDetailModel)
      .catch(err => Promise.reject(err.message || err));
  }
}
