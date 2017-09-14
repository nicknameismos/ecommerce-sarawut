import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonPaymentsComponent } from "../ion-payments/ion-payments";

/**
 * Generated class for the CreditComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'credit',
  templateUrl: 'credit.html'
})
export class CreditComponent {

  text: string;
  @Input() value: string;
  @Output() datacredit: EventEmitter<any> = new EventEmitter<any>();
  data: any = {};
  constructor(public parent: IonPaymentsComponent) {
    console.log('Hello CreditComponent Component');
    this.text = 'Hello World';

  }
  formcredit(data) {
    console.log(data);
    this.datacredit.emit(data);
  }


}
