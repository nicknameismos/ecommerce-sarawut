import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the IonPaymentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-payments',
  templateUrl: 'ion-payments.html'
})
export class IonPaymentsComponent {
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  @Input() channel: any;
  @Output() datapayment: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello IonPaymentsComponent Component');
  }

  selectpayment(data) {
    this.datashipping.order.payment = {
      paymenttype: data.name
    };
    this.datapayment.emit(this.datashipping);
  }


}
