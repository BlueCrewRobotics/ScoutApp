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
  zeroTimeError:boolean;
  longTimeError:boolean;
  noTeamError:boolean;

  noTeams:any[] = [];

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
      this.zeroTimeError = true;
    } else if (isNaN(this.switchTime) == true) {
      this.zeroTimeError = true;
    }

    if (this.scaleTime + this.switchTime > 150) {
      this.longTimeError = true;
    }

    this.storage.get("teams").then((val) => {
      var teams = JSON.parse(val);
      var numbers = [];
      for (var i = 0, len = teams.length; i < len; i++) {
        numbers.push(teams[i]['teamNumber']);
      }
      if (numbers.indexOf(this.teamOne) > -1) {
      } else {
        this.noTeamError = true;
        this.noTeams.push(this.teamOne);
      }

      if (numbers.indexOf(this.teamTwo) > -1) {
      } else {
        this.noTeamError = true;
        this.noTeams.push(this.teamTwo);   
      }

      if (numbers.indexOf(this.teamThree) > -1) {
      } else {
        this.noTeamError = true;
        this.noTeams.push(this.teamThree);   
      }

      if (this.numberNotNumberError == true) {
        let alert = this.alertCtrl.create({
          title: 'Team Error!',
          subTitle: 'Please enter only team numbers in the team fields!',
          buttons: ['OK']
        });
        alert.present();
        this.numberNotNumberError = false;
      } else if (this.noTeamError == true) {
        let alert = this.alertCtrl.create({
          title: 'No Team(s) Found!',
          subTitle: 'No team(s) have been found with the following numbers: ' + this.noTeams.join(", ") + '!',
          buttons: ['OK']
        });
        alert.present();
        this.noTeamError = false;
        this.noTeams = [];
      } else if (this.zeroTimeError == true) {
        let alert = this.alertCtrl.create({
          title: 'Time Error!',
          subTitle: 'Please enter the amount of time that a team controlled their switch/scale!',
          buttons: ['OK']
        });
        alert.present();
        this.zeroTimeError = false;
      } else if (this.longTimeError == true) {
        let alert = this.alertCtrl.create({
          title: 'Time Error!',
          subTitle: 'Please enter an amount of time less than 150 seconds!',
          buttons: ['OK']
        });
        alert.present();
        this.zeroTimeError = false;
      } else {
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
  
        this.viewCtrl.dismiss();
      }
    });
  }
}
