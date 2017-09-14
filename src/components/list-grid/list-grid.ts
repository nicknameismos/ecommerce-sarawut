import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the ListGridComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-grid',
  templateUrl: 'list-grid.html'
})
export class ListGridComponent {

  @Input() items: any;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(public log: LogServiceProvider) {
    this.log.info('Hello ListGridComponent Component with: ' + this.items);
  }

  _selectedItem(item) {
    this.selectedItem.emit(item);
  }

}
