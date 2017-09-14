import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListNotificationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-notification',
  templateUrl: 'list-notification.html'
})
export class ListNotificationComponent {
  @Input() items: any;
  // text: string;

  constructor() {
    console.log('Hello ListNotificationComponent Component');
    // this.text = 'Hello World';
  }

}
