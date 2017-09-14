import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment'
import { Constants } from "../../app/app.contants";

/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    //return value.toLowerCase();
    return moment(value).locale(Constants.locale).fromNow();
  }
}
