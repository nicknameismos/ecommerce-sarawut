import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { App, LoadingController } from "ionic-angular";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from "../../pages/login/login";
/*
  Generated class for the AuthorizeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthorizeProvider {
  loading = this.loadingCtrl.create({
    content: 'Authorization...'
  });
  // public http: Http, 
  constructor(public app: App, public loadingCtrl: LoadingController) {
    console.log('Hello AuthorizeProvider Provider');
  }

  isAuthorization() {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    if (!user) {
      // this.loading.present();
      setTimeout(() => {
        this.app.getActiveNav().push(LoginPage);
        // this.loading.dismiss();
        return;
      }, 300);
    } else {
      return user;
    }
  }

  getAuthorization() {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return user;
  }

  unAuthorization() { // logout
    window.localStorage.removeItem('e7e_jjecommerce_buy_user');
    return;
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

}
