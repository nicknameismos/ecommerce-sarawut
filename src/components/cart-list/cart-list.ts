import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the CartListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  @Input() carts: Array<any>;
  @Output() clickDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() manageItem: EventEmitter<any> = new EventEmitter();

  text: string;

  constructor(public log: LogServiceProvider) {
    this.log.info('Hello CartListComponent Component');
    this.text = 'Hello World';
  }

  clickDelete(item, i) {
    console.log(i);
    item.index = i;
    this.clickDeleteItem.emit(item);
  }

  countItem(e, data) {
    data.qty = e;
    this.manageItem.emit();
  }

}
