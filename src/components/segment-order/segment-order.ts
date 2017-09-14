import { Component } from '@angular/core';

/**
 * Generated class for the SegmentOrderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'segment-order',
  templateUrl: 'segment-order.html'
})
export class SegmentOrderComponent {

  text: string;

  constructor() {
    console.log('Hello SegmentOrderComponent Component');
    this.text = 'Hello World';
  }

}
