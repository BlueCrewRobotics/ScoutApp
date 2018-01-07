import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { TeamDataPage } from '../team-data/team-data';
import { AddTeamPage } from '../add-team/add-team';
import { AddMatchPage } from '../add-match/add-match';
import { SigninPage } from '../signin/signin';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'home.html',
})
export class HomePage {

  teams:any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private teamsProvider: TeamsProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, 
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public storage: Storage
    ) {
  }

  addTeam() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add Data',
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
    this.storage.clear();
  }

  ionViewDidLoad() {
    this.storage.get('securityKey').then((val) => {
      if (val == null || val == "") {
        let modal = this.modalCtrl.create(SigninPage);
        modal.onDidDismiss(data => {
          this.loadData();
        });
        modal.present();
      } else {
        this.loadData();
      }
    });
  }
}
