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
  dropGears:boolean;
  collectGears:boolean;
  climbRope:boolean;
  highBoiler:boolean;
  lowBoiler:boolean;
  collectFuel:boolean;

  dg:string;
  cg:string;
  cr:string;
  hb:string;
  lb:string;
  cf:string;

  nameError:boolean;
  numberError:boolean;
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

    if (this.dropGears == true) {
      this.dg = "Yes";
    } else {
      this.dg = "No";
    }

    if (this.collectGears == true) {
      this.cg = "Yes";
    } else {
      this.cg = "No";
    }

    if (this.climbRope == true) {
      this.cr = "Yes";
    } else {
      this.cr = "No";
    }

    if (this.highBoiler == true) {
      this.hb = "Yes";
    } else {
      this.hb = "No";
    }

    if (this.lowBoiler == true) {
      this.lb = "Yes";
    } else {
      this.lb = "No";
    }

    if (this.collectFuel == true) {
      this.cf = "Yes";
    } else {
      this.cf = "No";
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
    } else {

    this.team = {
      "teamName" : this.name,
      "teamNumber" : this.number,
      "dropGears" : this.dg,
      "collectGears" : this.cg,
      "climbRope" : this.cr,
      "highBoiler" : this.hb,
      "lowBoiler" : this.lb,
      "collectFuel" : this.cf,
      "wins" : "0",
      "losses" : "0"
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
