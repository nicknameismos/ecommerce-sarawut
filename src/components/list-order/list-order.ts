import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonOrdersComponent } from "../ion-orders/ion-orders";
import { OrderDetailPage } from "../../pages/order-detail/order-detail";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ListOrderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-order',
  templateUrl: 'list-order.html'
})
export class ListOrderComponent {
  @Input() items: any;
  @Input() status: string;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  data: any = {};

  user: any = {
    shop: {
      _id: ''
    }
  };
  constructor(public navCtrl: NavController) {
    console.log('Hello ListOrderComponent Component');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    // console.log(this.items);
  }
  selectOrder(item, i) {
    this.data = item;
    // this.navCtrl.push(OrderDetailPage);
    this.itemClicked.emit(this.data);
  }
}
