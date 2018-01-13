import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { InitialTutorialPage } from '../initial-tutorial/initial-tutorial';
import { ModalController } from 'ionic-angular';
import { Events } from 'ionic-angular';

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
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public events: Events
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
            let modal = this.modalCtrl.create(SigninPage);
            modal.onDidDismiss(data => {
              let tutorial = this.modalCtrl.create(InitialTutorialPage);
              tutorial.present();
              tutorial.onDidDismiss(data => {
                this.events.publish('functionCall:tabSelected');
                this.navCtrl.parent.select(0);
              })
            });
            modal.present();
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
