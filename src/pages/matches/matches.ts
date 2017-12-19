import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addMatch() {
    alert("Success");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
  }

}
