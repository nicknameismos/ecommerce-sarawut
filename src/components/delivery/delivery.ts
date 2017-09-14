import { Component, Input } from '@angular/core';
import { IonPaymentsComponent } from "../ion-payments/ion-payments";

/**
 * Generated class for the DeliveryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryComponent {
  @Input() value: string;

  text: string;

  constructor(public parent: IonPaymentsComponent) {
    console.log('Hello DeliveryComponent Component');
    this.text = 'Hello World';
  }

}
