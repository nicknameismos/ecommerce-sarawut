import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the TestComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test',
  templateUrl: 'test.html'
})
export class TestComponent {

  @Input() items: any;
  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
  constructor(public log:LogServiceProvider) {
    this.log.info('Hello TestComponent Component');

  }

  selected(title) {
    this.selectedItem.emit(title);
  }

}
