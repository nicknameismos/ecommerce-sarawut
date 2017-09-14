import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FavoriteModel } from '../favorite/favorite.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { Constants } from "../../app/app.contants";

/*
  Generated class for the FavoriteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello FavoriteServiceProvider Provider');
  }
  getFavorite(): Promise<FavoriteModel> {
    //return this.http.get('./assets/example_data/favorite.json')
    return this.http.get(Constants.URL + '/api/favoriteproductlist')
    
      .toPromise()
      .then(response => response.json() as FavoriteModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
