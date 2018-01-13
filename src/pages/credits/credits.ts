import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-credits',
  templateUrl: 'credits.html',
})
export class CreditsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
    ) {
  }

  launchSite(site) {
    if (site == "matt") {
      this.iab.create('http://matthewgallant.me');
    } else if (site == "jacob") {
      this.iab.create('https://github.com/jakeydoodle123');
    }
  }

}
