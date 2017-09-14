import { Component, ViewChild, Input } from '@angular/core';
import { Slides } from "ionic-angular";

/**
 * Generated class for the FormWizardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'form-wizard',
  templateUrl: 'form-wizard.html'
})
export class FormWizardComponent {
  @Input() listaddress: Array<any>;
  @Input() listshipping: any;
  @ViewChild('formWizard') formWizard: Slides;
  tabs: any = '0';
  text: string;

  constructor() {
    console.log('Hello FormWizardComponent Component');
    this.text = 'Hello World';
    
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }

  ngAfterViewInit() {
    this.formWizard.lockSwipes(true);
  }

  slidePrev() {
    this.formWizard.lockSwipes(false);
    this.formWizard.slidePrev();
    this.formWizard.lockSwipes(true);
  }

  slideNext(e) {
    this.formWizard.lockSwipes(false);
    this.formWizard.slideNext();
    this.formWizard.lockSwipes(true);
  }

}
