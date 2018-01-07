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
  dropGears:any;
  collectGears:any;
  climbRope:any;
  highBoiler:any;
  lowBoiler:any;
  collectFuel:any;

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

      // this.storage.get('securityKey').then((val) => {
      //   var headers = new Headers();
      //   headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      //   let options = new RequestOptions({ headers: headers });
  
      //   var params = 'securityKey=' + val + '&name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;    
      //   this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
      //     .subscribe(data => {
      //       loader.dismiss();
      //       if (data["_body"] == "Failure") {
      //         let alert = this.alertCtrl.create({
      //           title: 'Error!',
      //           subTitle: 'An error has occured while trying to add the team.',
      //           buttons: ['OK']
      //         });
      //         alert.present();
      //       } else if (data["_body"] == "SecurityError") {
      //         let alert = this.alertCtrl.create({
      //           title: 'Security Key Error!',
      //           subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
      //           buttons: ['OK']
      //         });
      //         alert.present();
      //       }
      //       this.viewCtrl.dismiss();
      //      }, error => {
      //       let alert = this.alertCtrl.create({
      //         title: 'Connection Error!',
      //         subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
      //         buttons: ['OK']
      //       });
      //       alert.present();
      //   });
      // });
    }
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('teamName');
    this.number = this.navParams.get('teamNumber');

    if (this.navParams.get('dropGears') == "Yes") {
      this.dropGears = true;
    } else {
      this.dropGears = false;
    }

    if (this.navParams.get('collectGears') == "Yes") {
      this.collectGears = true;
    } else {
      this.collectGears = false;
    }

    if (this.navParams.get('climbRope') == "Yes") {
      this.climbRope = true;
    } else {
      this.climbRope = false;
    }

    if (this.navParams.get('highBoiler') == "Yes") {
      this.highBoiler = true;
    } else {
      this.highBoiler = false;
    }

    if (this.navParams.get('lowBoiler') == "Yes") {
      this.lowBoiler = true;
    } else {
      this.lowBoiler = false;
    }

    if (this.navParams.get('collectFuel') == "Yes") {
      this.collectFuel = true;
    } else {
      this.collectFuel = false;
    }
  }

}
