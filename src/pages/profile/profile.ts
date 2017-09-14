import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfileModel } from '../profile/profile.model';
import { ProfileServiceProvider } from '../profile/profile.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { LoginPage } from "../login/login";
import { NotificationsPage } from "../notifications/notifications";
import { HistoriesPage } from "../histories/histories";
import { LocationsPage } from "../locations/locations";
import { SettingPage } from "../setting/setting";
import { LangaugePage } from "../langauge/langauge";
import { PolicyPage } from "../policy/policy";
import { HelpPage } from "../help/help";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData: ProfileModel = new ProfileModel();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileServiceProvider,
    public log: LogServiceProvider,
    public modalCtrl: ModalController,
    public authorizeProvider: AuthorizeProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ProfilePage');
    this.getProfileData();
  }

  ionViewWillEnter() {
    //this.getUser();
  }

  getUser() {
    //this.profileData = this.authorizeProvider.getAuthorization();
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

  logout() {
    this.authorizeProvider.unAuthorization();
    window.localStorage.removeItem('cart');
    this.getUser();
  }
  getProfileData() {
    this.profileService
      .getProfile()
      .then((data) => {
        this.profileData = data;
      }, (err) => {
        this.log.error(err);
      });
  }

  notification() {
    let modal = this.modalCtrl.create(NotificationsPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  histories() {
    let modal = this.modalCtrl.create(HistoriesPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  locations() {
    let modal = this.modalCtrl.create(LocationsPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  setting() {
    let modal = this.modalCtrl.create(SettingPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  language() {
    let modal = this.modalCtrl.create(LangaugePage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  policy() {
    let modal = this.modalCtrl.create(PolicyPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  help() {
    let modal = this.modalCtrl.create(HelpPage);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

}
