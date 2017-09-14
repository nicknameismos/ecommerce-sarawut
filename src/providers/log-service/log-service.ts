import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LogServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LogServiceProvider {
  
  constructor(public http: Http) {
    this.info('Hello LogServiceProvider Provider');
  }
  info(data: any) {
    console.log(data);
  }
  error(error: any) {
    console.error(error);
  }
  warning(warning: any) {
    console.warn(warning);
  }
  errorService(message: string, error: any) {
    console.error(error);
  }
}
