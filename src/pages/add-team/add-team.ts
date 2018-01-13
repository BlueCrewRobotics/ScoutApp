import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-team',
  templateUrl: 'add-team.html',
})
export class AddTeamPage {

  team:any;
  teams:any[] = [];

  securityKey:any;

  name:any;
  number:any;
  comments:any;
  groundCubes:boolean;
  returnCubes:boolean;
  stackCubes:boolean;
  switch:boolean;
  scale:boolean;
  climb:boolean;

  liftOthers:any;
  driveTrainType:any;

  gc:string;
  rc:string;
  sc:string;
  sw:string;
  sl:string;
  cl:string;
  lo:string;

  nameError:boolean;
  numberError:boolean;
  numberNotNumberError:boolean;
  driveTrainError:boolean;

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

  selectDriveTrain() {

  }

  save() {
    if (this.name) {
    } else {
      this.nameError = true;
    }

    if (this.number) {
    } else {
      this.numberError = true;
    }

    if (isNaN(this.number) == true) {
      this.numberNotNumberError = true;
    }

    if (this.groundCubes == true) {
      this.gc = "Yes";
    } else {
      this.gc = "No";
    }

    if (this.returnCubes == true) {
      this.rc = "Yes";
    } else {
      this.rc = "No";
    }

    if (this.stackCubes == true) {
      this.sc = "Yes";
    } else {
      this.sc = "No";
    }

    if (this.switch == true) {
      this.sw = "Yes";
    } else {
      this.sw = "No";
    }

    if (this.scale == true) {
      this.sl = "Yes";
    } else {
      this.sl = "No";
    }

    if (this.climb == true) {
      this.cl = "Yes";
    } else {
      this.cl = "No";
    }

    if (this.driveTrainType == "" || this.driveTrainType == null) {
      this.driveTrainError = true;
    }

    if (this.liftOthers == true) {
      this.lo = "Yes";
    } else {
      this.lo = "No";
    }

    if (this.nameError == true) {
      let alert = this.alertCtrl.create({
        title: 'Team Name!',
        subTitle: 'You must enter a team name!',
        buttons: ['OK']
      });
      alert.present();
      this.nameError = false;
    } else if (this.numberError == true) {
      let alert = this.alertCtrl.create({
        title: 'Team Number!',
        subTitle: 'You must enter a team number!',
        buttons: ['OK']
      });
      alert.present();
      this.numberError = false;
    } else if (this.numberNotNumberError == true) {
      let alert = this.alertCtrl.create({
        title: 'Team Number!',
        subTitle: 'Please enter a valid number!',
        buttons: ['OK']
      });
      alert.present();
      this.numberNotNumberError = false;
    } else if (this.driveTrainError == true) {
      let alert = this.alertCtrl.create({
        title: 'Drive Train!',
        subTitle: 'Please select a drive train! If you do not know what type it is, select \'Unknown\'.',
        buttons: ['OK']
      });
      alert.present();
      this.driveTrainError = false;
    } else {

    this.team = {
      "teamName" : this.name,
      "teamNumber" : this.number,
      "comments" : this.comments,
      "groundCubes" : this.gc,
      "returnCubes" : this.rc,
      "stackCubes" : this.sc,
      "switch" : this.sw,
      "scale" : this.sl,
      "climb" : this.cl,
      "driveTrainType" : this.driveTrainType,
      "liftOthers" : this.lo,
      "wins" : "0",
      "losses" : "0",
      "forces" : "0",
      "boosts" : "0",
      "levitates" : "0",
      "timeScale" : "0",
      "timeSwitch" : "0"
    }
    
    this.storage.get("teams").then((val) => {
      if (val == "" || val == null) {
        var data = "[" + JSON.stringify(this.team) + "]";
        this.storage.set("teams", data);
      } else {
        var existing = val.replace("]", ", ");
        var newData = existing + JSON.stringify(this.team) + "]";
        this.storage.set("teams", newData);
      }
    });

    this.viewCtrl.dismiss();
    }
  }
}
