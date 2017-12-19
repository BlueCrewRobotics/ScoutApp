import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { TeamDataPage } from '../team-data/team-data';
import { AddTeamPage } from '../add-team/add-team';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamsProvider: TeamsProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
  }

  addTeam() {
    let modal = this.modalCtrl.create(AddTeamPage);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }

  itemSelected(item) {
    let modal = this.modalCtrl.create(TeamDataPage, item);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }

  doRefresh(refresher) {
    this.teamsProvider.getTeams().subscribe(
      (data) => {
      this.teams = data;
      })
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  loadData() {
    let loader = this.loadingCtrl.create({
      content: "Loading Teams...",
      duration: 3000
    });
    loader.present();
    this.teamsProvider.getTeams().subscribe(
      (data) => {
      this.teams = data;
      loader.dismiss();
      })
  }

  ionViewDidLoad() {
    this.loadData();
  }

}
