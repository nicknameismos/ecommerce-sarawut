import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the ListScollXComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-scoll-x',
  templateUrl: 'list-scoll-x.html'
})
export class ListScollXComponent {

  @Input() populars: any;
  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(public log: LogServiceProvider) {
    this.log.info('Hello ListScollXComponent Component');
  }

  _selectedItem(data) {
    this.selectedItem.emit(data);
  }

}
