import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-match',
  templateUrl: 'add-match.html',
})
export class AddMatchPage {

  winOne:any;
  winTwo:any;
  winThree:any;
  loseOne:any;
  loseTwo:any;
  loseThree:any;

  numberNotNumberError:boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public storage: Storage
    ) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    if (isNaN(this.winOne) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.winTwo) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.winThree) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.loseOne) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.loseTwo) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.loseThree) == true) {
      this.numberNotNumberError = true;
    }

    if (this.numberNotNumberError == true) {
      let alert = this.alertCtrl.create({
        title: 'Team Number!',
        subTitle: 'Please enter all of the team\'s number\'s!',
        buttons: ['OK']
      });
      alert.present();
      this.numberNotNumberError = false;
    } else {

      this.storage.get("teams").then((val) => {
        var teams = JSON.parse(val);
        for (var i = 0, len = teams.length; i < len; i++) {
          if (teams[i]['teamNumber'] == this.winOne) {
            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
          }
          if (teams[i]['teamNumber'] == this.winTwo) {
            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
          }
          if (teams[i]['teamNumber'] == this.winThree) {
            teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
          }
          if (teams[i]['teamNumber'] == this.loseOne) {
            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
          }
          if (teams[i]['teamNumber'] == this.loseTwo) {
            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
          }
          if (teams[i]['teamNumber'] == this.loseThree) {
            teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
          }
        }
        teams = JSON.stringify(teams);
        this.storage.set("teams", teams);
      });

      this.viewCtrl.dismiss();
    }
  }
}