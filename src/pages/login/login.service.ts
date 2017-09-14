import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./login.model";
import { Constants } from "../../app/app.contants";
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  onAuthorization(user): Promise<AuthorizeModel> { // signup
    return this.http.post(Constants.URL + '/api/auth/signin', user)
    // return this.http.post(Constants.URL + '/api/auth/signin', user)
      .toPromise()
      .then(response => {
        let data = response.json() as AuthorizeModel;
        window.localStorage.setItem('e7e_jjecommerce_buy_user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
