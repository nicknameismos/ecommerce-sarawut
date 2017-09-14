import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { HomeModel } from "./home.model";
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { Constants } from "../../app/app.contants";


@Injectable()
export class HomeService {
  constructor(public http: Http, public log: LogServiceProvider) {}

  // getData(): Promise<HomeModel> {
  //   return this.http.get(Constants.URL + '/api/homes')
  //    .toPromise()
  //    .then(response => response.json() as HomeModel)
  //    .catch(this.handleError);
  // }

  getData(): Promise<HomeModel> {
    return this.http.get(Constants.URL + '/api/dataofcategories')
    // return this.http.get('./assets/example_data/home.json')
     .toPromise()
     .then(response => response.json() as HomeModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
