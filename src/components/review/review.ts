import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ReviewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'review',
  templateUrl: 'review.html'
})
export class ReviewComponent {
  @Input() items: any;
  @Input() rate: number;
  @Output() modalReview: EventEmitter<any> = new EventEmitter<any>();
  reviews: any;
  text: string;
  groups: Array<any>;
  constructor() {
    console.log('Hello ReviewComponent Component');
    this.text = 'Hello World';
    this.groups = [
      {
        name: '5',
        percent: '0%',
        sum: 0
      },
      {
        name: '4',
        percent: '0%',
        sum: 0
      },
      {
        name: '3',
        percent: '0%',
        sum: 0
      },
      {
        name: '2',
        percent: '0%',
        sum: 0
      },
      {
        name: '1',
        percent: '0%',
        sum: 0
      }
    ];
  }

  ionViewWillEnter() {
    console.log("ttt");
    this.reviews = this.items || [];
    console.log(this.reviews);
    this.reviewSummary();
  }
  reviewSummary() {
    this.reviews.forEach(element => {
      switch (Math.round(element.rate)) {
        case 5:
          this.groups[0].sum += 1;
          this.groups[0].percent = ((this.groups[0].sum / this.reviews.length) * 100) + '%';
          break;
        case 4:
          this.groups[1].sum += 1;
          this.groups[1].percent = ((this.groups[1].sum / this.reviews.length) * 100) + '%';
          break;
        case 3:
          this.groups[2].sum += 1;
          this.groups[2].percent = ((this.groups[2].sum / this.reviews.length) * 100) + '%';
          break;
        case 2:
          this.groups[3].sum += 1;
          this.groups[3].percent = ((this.groups[3].sum / this.reviews.length) * 100) + '%';
          break;
        case 1:
          this.groups[4].sum += 1;
          this.groups[4].percent = ((this.groups[4].sum / this.reviews.length) * 100) + '%';
          break;
        default:

      }
    });

    //console.log(this.groups);
  }
  writeReview(){
    console.log("log on chlid");
    this.modalReview.emit('test');
  }
}
