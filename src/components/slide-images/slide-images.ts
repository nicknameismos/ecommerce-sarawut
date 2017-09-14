import { Component, Input } from '@angular/core';

/**
 * Generated class for the SlideImagesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'slide-images',
  templateUrl: 'slide-images.html'
})
export class SlideImagesComponent {
  @Input() images:Array<string>;
  constructor() {
    console.log('Hello SlideImagesComponent Component');
  }

}
