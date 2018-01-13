import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreditsPage } from '../credits/credits';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  credits() {
    this.navCtrl.push(CreditsPage);
  }

}
