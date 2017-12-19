import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-team',
  templateUrl: 'add-team.html',
})
export class AddTeamPage {

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
    public loadingCtrl: LoadingController
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
      let loader = this.loadingCtrl.create({
        content: "Adding Team..",
        duration: 3000
      });
      loader.present();

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let options = new RequestOptions({ headers: headers });

      var params = 'name=' + this.name + '&number=' + this.number + '&dropGears=' + this.dg + '&collectGears=' + this.cg + '&climbRope=' + this.cr + '&highBoiler=' + this.hb + '&lowBoiler=' + this.lb + '&collectFuel=' + this.cf;    
      this.http.post("http://bluecrew6153.org/scout/addTeam.php", params, options)
        .subscribe(data => {
          loader.dismiss();
          this.viewCtrl.dismiss();
         }, error => {
          let alert = this.alertCtrl.create({
            title: 'Connection Error!',
            subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
            buttons: ['OK']
          });
          alert.present();
      });
    }
  }

}
