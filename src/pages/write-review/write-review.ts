import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReviewsModel } from '../../app/app.model';

/**
 * Generated class for the WriteReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
})
export class WriteReviewPage {
  data: any;
  reviewData: ReviewsModel = new ReviewsModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.data = navParams.get('data');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteReviewPage');
  }

  writeReview() {
    this.viewCtrl.dismiss({ data: 'test' });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addReview() {
    console.log(this.reviewData);
    this.viewCtrl.dismiss(this.reviewData);
  }
}
