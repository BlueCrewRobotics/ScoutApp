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
          icon: "add",
          handler: () => {
            let modal = this.modalCtrl.create(AddTeamPage);
            modal.onDidDismiss(data => {
              this.loadData();
            });
            modal.present();
          }
        },{
          text: 'Add Match',
          icon: "add",
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
    // this.teamsProvider.getTeams().subscribe(
    //   (data) => {
        // this.storage.set("teams", data);
        this.storage.get("teams").then((val) => {
          this.teams = val;
          console.log(val);
        })
      // })
    // setTimeout(() => {
    //   refresher.complete();
    // }, 2000);
  }

  loadData() {

    //var data = '[{"id":"116","teamName":"Blue Crew","teamNumber":"6153","dropGears":"Yes","collectGears":"Yes","climbRope":"Yes","highBoiler":"Yes","lowBoiler":"No","collectFuel":"No","wins":"6","losses":"5"},{"id":"117","teamName":"Infinite Loop","teamNumber":"2648","dropGears":"Yes","collectGears":"Yes","climbRope":"Yes","highBoiler":"Yes","lowBoiler":"Yes","collectFuel":"Yes","wins":"0","losses":"1"},{"id":"118","teamName":"Test","teamNumber":"1234","dropGears":"No","collectGears":"No","climbRope":"No","highBoiler":"No","lowBoiler":"No","collectFuel":"No","wins":"0","losses":"0"}]';
    // console.log(JSON.parse(data));
    //this.teams = JSON.parse(data);

    var data = '{\"teamName\":\"Matt\",\"teamNumber\":\"1357\",\"dropGears\":\"Yes\",\"collectGears\":\"Yes\",\"climbRope\":\"Yes\",\"highBoiler\":\"Yes\",\"lowBoiler\":\"Yes\",\"collectFuel\":\"Yes\",\"wins\":\"0\",\"losses\":\"0\"},{\"teamName\":\"Test\",\"teamNumber\":\"1234\",\"dropGears\":\"No\",\"collectGears\":\"No\",\"climbRope\":\"No\",\"highBoiler\":\"No\",\"lowBoiler\":\"No\",\"collectFuel\":\"No\",\"wins\":\"0\",\"losses\":\"0\"}';
    console.log(JSON.parse(data));

    // this.storage.get("teams").then((val) => {
    //   console.log(val);
    //   // for (var i = 0, len = val.length; i < len; i++) {
    //   //   this.teams = val;
    //   // }
    //   //this.storage.set("teams", "");
    // });
    
    // let loader = this.loadingCtrl.create({
    //   content: "Loading Teams...",
    //   duration: 3000
    // });
    // loader.present();
    // this.teamsProvider.getTeams().subscribe(
    //   (data) => {
    //   this.storage.set("teams", data);
    //   this.storage.get("teams").then((val) => {
    //     this.teams = val;
    //     loader.dismiss();
    //   });
    // })
  }

  uploadData() {
    let loader = this.loadingCtrl.create({
      content: "Uploading Teams...",
      duration: 3000
    });
    loader.present();
    this.teamsProvider.getTeams().subscribe(
      (data) => {
      this.storage.set("teams", data);
      this.storage.get("teams").then((val) => {
        this.teams = val;
        loader.dismiss();
      });
    })
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
