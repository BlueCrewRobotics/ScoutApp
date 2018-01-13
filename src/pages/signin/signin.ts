import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  teamKey:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public storage: Storage,
    public viewCtrl: ViewController,
    ) {
  }

  signIn() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers });

    var params = 'securityKey=' + this.teamKey;    
    this.http.post("http://scout.bluecrew6153.org/api/auth.php", params, options)
      .subscribe(data => {
        if (data["_body"] == "Valid") {
          this.storage.set('securityKey', this.teamKey);
          this.viewCtrl.dismiss();
        } else {
          let alert = this.alertCtrl.create({
            title: 'Team Key Error!',
            subTitle: 'Your team key is not valid. Please use a valid team key.',
            buttons: ['OK']
          });
          alert.present();
        }
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Connection Error!',
          subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to sign in for the first time.',
          buttons: ['OK']
        });
        alert.present();
    });
  }

}
