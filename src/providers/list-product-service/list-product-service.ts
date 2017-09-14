import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductModel } from "../../pages/product-form/product-form.model";
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

}
