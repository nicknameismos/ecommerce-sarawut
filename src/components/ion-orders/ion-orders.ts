import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonOrdersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-orders',
  templateUrl: 'ion-orders.html'
})
export class IonOrdersComponent {
  @Input() channel: any;
  @Input() steps:Array<any>;
  text: string;

  constructor() {
    console.log('Hello IonOrdersComponent Component');
    this.text = 'Hello World';
  }

}
