import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  securityKey:any;
  lol:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
    ) {
  }

  save() {
    this.storage.set('securityKey', this.securityKey);
  }

  about() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    this.storage.get('securityKey').then((val) => {
      this.securityKey = val;
    });
  }

}
