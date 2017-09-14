import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CheckoutServiceProvider } from '../../pages/checkout/checkout.service';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  data: any = {};
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  datapayment: any = {};
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() datapaymentData: EventEmitter<any> = new EventEmitter<any>();


  channel: string = 'credit';
  constructor(public checkoutServiceProvider: CheckoutServiceProvider) {
    console.log('Hello PaymentComponent Component');
  }

  formcredit(e) {
    if (e.creditno) {
      this.datashipping.order.payment.creditno = e.creditno
    }
    if (e.creditname) {
      this.datashipping.order.payment.creditname = e.creditname
    }
    if (e.expdate) {
      this.datashipping.order.payment.expdate = e.expdate
    }
    if (e.creditcvc) {
      this.datashipping.order.payment.creditcvc = e.creditcvc
    }
  }

  stepValidation() {
    this.datapayment = this.datashipping;

    console.log(this.datapayment);
    var chk = false;
    if (this.datapayment.order && this.datapayment.order.payment && this.datapayment.order.payment.paymenttype) {
      if (this.datapayment.order.payment.paymenttype === 'credit') {
        if (this.datapayment.order.payment.creditno && this.datapayment.order.payment.creditname && this.datapayment.order.payment.expdate && this.datapayment.order.payment.creditcvc) {
          chk = true;
        }
      } else if (this.datapayment.order.payment.paymenttype === 'delivery') {
        chk = true;
      } else if (this.datapayment.order.payment.paymenttype === 'bank') {
        if (this.datapayment.order.payment.counterservice) {
          chk = true;
        }
      }
    } else {
      this.datapayment.order.payment.paymenttype = this.channel;
    }

    if (chk) {
      // this.checkoutServiceProvider.saveOrderData(this.datapayment).then((data) => {
      this.gotoNext.emit(this.datapayment);
      // }, (error) => {
      //   console.error(error);
      // });
    } else {
      alert('Please enter your payment');
    }
  }

  // paymenttype(type) {
  //   this.data.paymenttype = type;
  // }
  countername(name) {
    this.data.counterservice = name;
  }

  paymentType(e) {
    this.datapayment = e;
  }


}
