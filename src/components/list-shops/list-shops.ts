import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the ListItemsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-shops',
  templateUrl: 'list-shops.html'
})
export class ListShopsComponent {

  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(public log: LogServiceProvider) {

  }

  onClick(item) {
    this.itemClicked.emit(item);
  }

}
