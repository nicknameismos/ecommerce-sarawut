import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the ListItemsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-items',
  templateUrl: 'list-items.html'
})
export class ListItemsComponent {
  posts: any;

  @Input() items: any;
  @Input() showSearch: boolean = true;
  @Input() showToolbar: boolean = false;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(public log: LogServiceProvider) {

  }

  onClick(item) {
    this.itemClicked.emit(item);
  }

  getItems(e) {
    if (!this.posts) {
      this.posts = this.items;
    } else {
      this.items = this.posts;
    }
    // set val to the value of the searchbar
    let val = e.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
