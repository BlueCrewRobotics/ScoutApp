import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { TeamDataPage } from '../team-data/team-data';
import { AddTeamPage } from '../add-team/add-team';
import { AddMatchPage } from '../add-match/add-match';
import { InitialTutorialPage } from '../initial-tutorial/initial-tutorial';
import { SigninPage } from '../signin/signin';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'home.html',
})
export class HomePage {

  teams:any[] = [];
  team:any;

  connection:number = 0;
  key:number = 0;
  general:number = 0;
  success:number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private teamsProvider: TeamsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, 
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public storage: Storage,
    public http: Http,
    public events: Events,
    public toastCtrl: ToastController
    ) {
  }

  addTeam() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Add Team',
          icon: "people",
          handler: () => {
            let modal = this.modalCtrl.create(AddTeamPage);
            modal.onDidDismiss(data => {
              this.loadData();
            });
            modal.present();
          }
        },{
          text: 'Add Match',
          icon: "flag",
          handler: () => {
            let modal = this.modalCtrl.create(AddMatchPage);
            modal.onDidDismiss(data => {
              this.loadData();
            });
            modal.present();
          }
        },{
          text: 'Cancel',
          icon: "close",
          role: 'cancel',
        }
      ]
    });
    actionSheet.present();
  }

  itemSelected(item) {
    console.log(item);
    let modal = this.modalCtrl.create(TeamDataPage, item);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }

  doRefresh(refresher) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Download',
      message: 'Are you sure you want to download the current teams? It will erase all saved teams that you have not uploaded.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            refresher.complete();
          }
        },
        {
          text: 'Download',
          handler: () => {
            this.teamsProvider.getTeams().subscribe(
              (data) => {
                this.teams = data;
                this.storage.set("teams", JSON.stringify(data));
                refresher.complete();
                let toast = this.toastCtrl.create({
                  message: 'New Teams Have Been Downloaded.',
                  duration: 3000,
                  position: 'top'
                });
                toast.present();
              }, error => {
                this.connection = this.connection + 1;
                this.connectionError();
            })
            setTimeout(() => {
              refresher.complete();
            }, 2000);
          }
        }
      ]
    });
    alert.present();
  }

  loadData() {    
    this.storage.get("teams").then((val) => {
      this.teams = JSON.parse(val);
    });
  }

  loadDataFromServer() {    
    let alert = this.alertCtrl.create({
      title: 'Download Teams',
      message: 'Would you like to download the current index of teams now?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Download',
          handler: () => {
          this.teamsProvider.getTeams().subscribe(
            (data) => {
              this.teams = data;
              this.storage.set("teams", JSON.stringify(data));
              let toast = this.toastCtrl.create({
                message: 'New Teams Have Been Downloaded.',
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }, error => {
              this.connection = this.connection + 1;
              this.connectionError();
          })
          }
        }
      ]
    });
    alert.present();
  }

  connectionError() {
    if (this.connection == 1) {
      let toast = this.toastCtrl.create({
        message: 'No Internet Connection. Please Connect to the Internet and Try Again.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  keyError() {
    if (this.key == 1) {
      let toast = this.toastCtrl.create({
        message: 'You Do Not Have a Valid Security Key. Please Change It in the Settings Tab to a Valid Key.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  generalError() {
    if (this.general == 1) {
      let toast = this.toastCtrl.create({
        message: 'An Error Has Occured. Please Try Again Later.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  uploadSuccess() {
    if (this.success == 1) {
      let toast = this.toastCtrl.create({
        message: 'Your Teams Have Been Uploaded.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  uploadData() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Upload',
      message: 'Are you sure you want to upload your teams?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Upload',
          handler: () => {
            this.storage.get('securityKey').then((sec) => {
              let loader = this.loadingCtrl.create({
                content: 'Uploading Teams...'
              });
              loader.present();
              for (var i = 0, len = this.teams.length; i < len; i++) {
                var headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded' );
                let options = new RequestOptions({ headers: headers });
          
                var params = 'securityKey=' + sec + '&name=' + this.teams[i]['teamName'] + '&number=' + this.teams[i]['teamNumber'] + '&comments=' + this.teams[i]['comments'] + '&groundCubes=' + this.teams[i]['groundCubes'] + '&returnCubes=' + this.teams[i]['returnCubes'] + '&stackCubes=' + this.teams[i]['stackCubes'] + '&switch=' + this.teams[i]['switch'] + '&scale=' + this.teams[i]['scale'] + '&climb=' + this.teams[i]['climb'] + '&wins=' + this.teams[i]['wins'] + '&losses=' + this.teams[i]['losses'] + '&boosts=' + this.teams[i]['boosts'] + '&forces=' + this.teams[i]['forces'] + '&levitates=' + this.teams[i]['levitates'] + '&timeScale=' + this.teams[i]['timeScale'] + '&timeSwitch=' + this.teams[i]['timeSwitch']  + '&driveTrainType=' + this.teams[i]['driveTrainType']  + '&liftOthers=' + this.teams[i]['liftOthers'];    
                this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
                  .subscribe(data => {
                    if (data["_body"] == "Failure") {
                      this.general = this.general + 1;
                      this.generalError();
                    } else if (data["_body"] == "SecurityError") {
                      this.key = this.key + 1;
                      this.keyError();
                    } else {
                      this.success = this.success + 1;
                      this.uploadSuccess();
                    }
                  }, error => {
                    this.connection = this.connection + 1;
                    this.connectionError();
                });
              }
              loader.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
    this.general = 0;
    this.key = 0;
    this.success = 0;
    this.connection = 0;
  }

  ionViewDidLoad() {
    this.events.subscribe('functionCall:tabSelected', eventData => { 
      this.loadDataFromServer();
    });

    this.storage.get('securityKey').then((val) => {
      if (val == null || val == "") {
        let modal = this.modalCtrl.create(SigninPage);
        modal.onDidDismiss(data => {
          let tutorial = this.modalCtrl.create(InitialTutorialPage);
          tutorial.onDidDismiss(data => {
            this.loadDataFromServer();
          });
          tutorial.present();
        });
        modal.present();
      } else {
        this.loadData();
      }
    });
  }
}
