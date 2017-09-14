import { Component,Input } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the ImageListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'image-list',
  templateUrl: 'image-list.html'
})
export class ImageListComponent {
 @Input() images: Array<any>;
  text: string;

  constructor() {
    console.log('Hello ImageListComponent Component');
    this.text = 'Hello World';
  }

}
