import { Component } from '@angular/core';

/**
 * Generated class for the IonStepsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-steps',
  templateUrl: 'ion-steps.html'
})
export class IonStepsComponent {

  text: string;

  constructor() {
    console.log('Hello IonStepsComponent Component');
    this.text = 'Hello World';
  }

}
