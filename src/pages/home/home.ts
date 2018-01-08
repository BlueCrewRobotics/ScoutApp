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

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'home.html',
})
export class HomePage {

  teams:any[] = [];
  team:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private teamsProvider: TeamsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, 
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public storage: Storage,
    public http: Http
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
          
                var params = 'securityKey=' + sec + '&name=' + this.teams[i]['teamName'] + '&number=' + this.teams[i]['teamNumber'] + '&comments=' + this.teams[i]['comments'] + '&groundCubes=' + this.teams[i]['groundCubes'] + '&returnCubes=' + this.teams[i]['returnCubes'] + '&stackCubes=' + this.teams[i]['stackCubes'] + '&switch=' + this.teams[i]['switch'] + '&scale=' + this.teams[i]['scale'] + '&climb=' + this.teams[i]['climb'] + '&wins=' + this.teams[i]['wins'] + '&losses=' + this.teams[i]['losses'];    
                this.http.post("http://scout.bluecrew6153.org/api/team.php", params, options)
                  .subscribe(data => {
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
                  }, error => {
                    let alert = this.alertCtrl.create({
                      title: 'Connection Error!',
                      subTitle: 'You appear to not be connected to the internet! Scout requires access to the internet to retrive data.',
                      buttons: ['OK']
                    });
                    alert.present();
                });
              }
              loader.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.storage.get('securityKey').then((val) => {
      if (val == null || val == "") {
        let modal = this.modalCtrl.create(SigninPage);
        modal.onDidDismiss(data => {
          let tutorial = this.modalCtrl.create(InitialTutorialPage);
          tutorial.onDidDismiss(data => {
            this.loadData();
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
