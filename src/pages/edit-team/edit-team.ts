import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-edit-team',
  templateUrl: 'edit-team.html',
})
export class EditTeamPage {

  team:any;

  name:any;
  number:any;
  comments:any;
  groundCubes:any;
  returnCubes:any;
  stackCubes:any;
  switch:any;
  scale:any;
  climb:any;

  gc:string;
  rc:string;
  sc:string;
  sw:string;
  sl:string;
  cl:string;

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
        "comments" : this.comments,
        "groundCubes" : this.gc,
        "returnCubes" : this.rc,
        "stackCubes" : this.sc,
        "switch" : this.sw,
        "scale" : this.sl,
        "climb" : this.cl,
        "wins" : "0",
        "losses" : "0"
      }
      
      this.storage.get("teams").then((val) => {
        var teams = JSON.parse(val);
        for (var i = 0, len = teams.length; i < len; i++) {
          if (teams[i]['teamNumber'] == this.number) {
            teams[i] = this.team;
          }
        }
        teams = JSON.stringify(teams);
        this.storage.set("teams", teams);
      });
  
      this.viewCtrl.dismiss();
    }
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('teamName');
    this.number = this.navParams.get('teamNumber');
    this.comments = this.navParams.get('comments');

    if (this.navParams.get('groundCubes') == "Yes") {
      this.groundCubes = true;
    } else {
      this.groundCubes = false;
    }

    if (this.navParams.get('returnCubes') == "Yes") {
      this.returnCubes = true;
    } else {
      this.returnCubes = false;
    }

    if (this.navParams.get('stackCubes') == "Yes") {
      this.stackCubes = true;
    } else {
      this.stackCubes = false;
    }

    if (this.navParams.get('switch') == "Yes") {
      this.switch = true;
    } else {
      this.switch = false;
    }

    if (this.navParams.get('scale') == "Yes") {
      this.scale = true;
    } else {
      this.scale = false;
    }

    if (this.navParams.get('climb') == "Yes") {
      this.climb = true;
    } else {
      this.climb = false;
    }
  }

}
