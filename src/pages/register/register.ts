import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AuthorizeModel } from "./register.model";
import { RegisterServiceProvider } from "./register.service";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signup: FormGroup;
  userInfo: AuthorizeModel = new AuthorizeModel();
  loading = this.loadingController.create();

  constructor(public navCtrl: NavController, public navParams: NavParams, public regisService: RegisterServiceProvider, public loadingController: LoadingController) {
    this.signup = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doSignup() {
    this.loading.present();
    this.userInfo = this.signup.value;
    console.log(this.userInfo);
    this.regisService.newAuthorization(this.userInfo).then((data) => {
      this.navCtrl.pop();
      this.loading.dismiss();
    }, (error) => {
      console.error(error);
      this.loading.dismiss();      
    });

  }

}
