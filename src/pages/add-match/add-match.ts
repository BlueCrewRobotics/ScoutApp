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

  teamOne:any;
  teamTwo:any;
  teamThree:any;
  win:any;
  force:any;
  boost:any;
  levitate:any;
  scaleTime:any;
  switchTime:any;

  numberNotNumberError:boolean;
  timeError:boolean;

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
    if (isNaN(this.teamOne) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.teamTwo) == true) {
      this.numberNotNumberError = true;
    } else if (isNaN(this.teamThree) == true) {
      this.numberNotNumberError = true;
    }
    
    if (isNaN(this.scaleTime) == true) {
      this.timeError = true;
    } else if (isNaN(this.switchTime) == true) {
      this.timeError = true;
    }

    if (this.numberNotNumberError == true) {
      let alert = this.alertCtrl.create({
        title: 'Team Error!',
        subTitle: 'Please enter only team numbers in the team fields!',
        buttons: ['OK']
      });
      alert.present();
      this.numberNotNumberError = false;
    } else if (this.timeError == true) {
      let alert = this.alertCtrl.create({
        title: 'Time Error!',
        subTitle: 'Please enter the amount of time that a team controlled their switch/scale!',
        buttons: ['OK']
      });
      alert.present();
      this.timeError = false;
    } else {
      this.storage.get("teams").then((val) => {
        var teams = JSON.parse(val);
        for (var i = 0, len = teams.length; i < len; i++) {
          if (this.win == true) {
            if (teams[i]['teamNumber'] == this.teamOne) {
              teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
            }
            if (teams[i]['teamNumber'] == this.teamTwo) {
              teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
            }
            if (teams[i]['teamNumber'] == this.teamThree) {
              teams[i]['wins'] = (parseInt(teams[i]['wins']) + 1).toString();
            }
          } else {
            if (teams[i]['teamNumber'] == this.teamOne) {
              teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
            }
            if (teams[i]['teamNumber'] == this.teamTwo) {
              teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
            }
            if (teams[i]['teamNumber'] == this.teamThree) {
              teams[i]['losses'] = (parseInt(teams[i]['losses']) + 1).toString();
            }
          }

          if (teams[i]['teamNumber'] == this.teamOne) {
            if (this.force == true) {
              teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
            }
            if (this.boost == true) {
              teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
            }
            if (this.levitate == true) {
              teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
            }
            if (this.scaleTime) {
              teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(this.scaleTime)).toString();
            }
            if (this.switchTime) {
              teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(this.switchTime)).toString();
            }
          }

          if (teams[i]['teamNumber'] == this.teamTwo) {
            if (this.force == true) {
              teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
            }
            if (this.boost == true) {
              teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
            }
            if (this.levitate == true) {
              teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
            }
            if (this.scaleTime) {
              teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(this.scaleTime)).toString();
            }
            if (this.switchTime) {
              teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(this.switchTime)).toString();
            }
          }

          if (teams[i]['teamNumber'] == this.teamThree) {
            if (this.force == true) {
              teams[i]['forces'] = (parseInt(teams[i]['forces']) + 1).toString();
            }
            if (this.boost == true) {
              teams[i]['boosts'] = (parseInt(teams[i]['boosts']) + 1).toString();
            }
            if (this.levitate == true) {
              teams[i]['levitates'] = (parseInt(teams[i]['levitates']) + 1).toString();
            }
            if (this.scaleTime) {
              teams[i]['timeScale'] = (parseInt(teams[i]['timeScale']) + parseInt(this.scaleTime)).toString();
            }
            if (this.switchTime) {
              teams[i]['timeSwitch'] = (parseInt(teams[i]['timeSwitch']) + parseInt(this.switchTime)).toString();
            }
          }

        }
        teams = JSON.stringify(teams);
        this.storage.set("teams", teams);
      });

      this.viewCtrl.dismiss();
    }
  }
}
