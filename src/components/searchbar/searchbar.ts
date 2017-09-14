import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent {

  @Input() items: any
  @Output() returnData: EventEmitter<any> = new EventEmitter<any>();
  constructor(public log: LogServiceProvider) {
    this.log.info('Hello SearchbarComponent Component');
  }

  getItems(ev) {
    // Reset items back to all of the items
    // set val to the value of the ev target
    var val = ev.target.value;
    var result = [];
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let search = JSON.parse(window.localStorage.getItem('array'));
      result = search.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.returnData.emit(result);
    } else {
      this.returnData.emit('reload');
    }

  }

}
