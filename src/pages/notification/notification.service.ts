import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NotificationModel } from './notification.model';

/*
  Generated class for the NotificationserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NotificationserviceProvider {

  constructor(public http: Http) {
    console.log('Hello NotificationserviceProvider Provider');
  }
  getNotification(): Promise<NotificationModel> {
    return this.http.get('./assets/example_data/notification.json')
      .toPromise()
      .then(response => response.json() as NotificationModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
