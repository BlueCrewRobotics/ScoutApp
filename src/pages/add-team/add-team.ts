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
<<<<<<< HEAD

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
=======
      let loader = this.loadingCtrl.create({
        content: "Adding Team..",
        duration: 3000
      });
      loader.present();

      this.storage.get('securityKey').then((val) => {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
  
        var params = 'securityKey=' + val + '&name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;    
        this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
          .subscribe(data => {
            loader.dismiss();
            if (data["_body"] == "Failure") {
              let alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'An error has occured while trying to add the team.',
                buttons: ['OK']
              });
              alert.present();
            } else if (data["_body"] == "SecurityError") {
              let alert = this.alertCtrl.create({
                title: 'Security Key Error!',
                subTitle: 'You do not have a valid security key. Please change your security key in the settings tab to a valid one.',
                buttons: ['OK']
              });
              alert.present();
            }
            this.viewCtrl.dismiss();
           }, error => {
            let alert = this.alertCtrl.create({
              title: 'Connection Error!',
              subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
              buttons: ['OK']
            });
            alert.present();
        });
      });
>>>>>>> master
    }
  }
}
