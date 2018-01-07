import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';

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
    public storage: Storage,
    public alertCtrl: AlertController
    ) {
  }

  save() {
    this.storage.set('securityKey', this.securityKey);
  }

  about() {
    this.navCtrl.push(AboutPage);
  }

  reset() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Reset',
      message: 'Are you sure you want to reset the app? It will erase all saved teams that you have not uploaded.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Reset',
          handler: () => {
            this.storage.clear();
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.storage.get('securityKey').then((val) => {
      this.securityKey = val;
    });
  }

}
