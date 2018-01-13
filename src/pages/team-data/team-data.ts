import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditTeamPage } from '../edit-team/edit-team';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team-data',
  templateUrl: 'team-data.html',
})
export class TeamDataPage {

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
  wins:any;
  losses:any;
  forces:any;
  boosts:any;
  levitates:any;
  timeScale:any;
  timeSwitch:any;
  driveTrainType:any;
  liftOthers:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  editTeam() {
    let modal = this.modalCtrl.create(EditTeamPage, this.team);
    modal.onDidDismiss(data => {
      this.viewCtrl.dismiss()
    });
    modal.present();
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('teamName');
    this.number = this.navParams.get('teamNumber');
    this.comments = this.navParams.get('comments');
    this.groundCubes = this.navParams.get('groundCubes');
    this.returnCubes = this.navParams.get('returnCubes');
    this.stackCubes = this.navParams.get('stackCubes');
    this.switch = this.navParams.get('switch');
    this.scale = this.navParams.get('scale');
    this.climb = this.navParams.get('climb');
    this.wins = this.navParams.get('wins');
    this.losses = this.navParams.get('losses');
    this.forces = this.navParams.get('forces');
    this.boosts = this.navParams.get('boosts');
    this.levitates = this.navParams.get('levitates');
    this.timeScale = this.navParams.get('timeScale');
    this.timeSwitch = this.navParams.get('timeSwitch');
    this.driveTrainType = this.navParams.get('driveTrainType');
    this.liftOthers = this.navParams.get('liftOthers');

    this.team = {
      "teamName" : this.name,
      "teamNumber" : this.number,
      "comments" : this.comments,
      "groundCubes" : this.groundCubes,
      "returnCubes" : this.returnCubes,
      "stackCubes" : this.stackCubes,
      "switch" : this.switch,
      "scale" : this.scale,
      "climb" : this.climb,
      "wins" : this.wins,
      "losses" : this.losses,
      "forces" : this.forces,
      "boosts" : this.boosts,
      "levitates" : this.levitates,
      "timeScale" : this.timeScale,
      "timeSwitch" : this.timeSwitch,
      "driveTrainType" : this.driveTrainType,
      "liftOthers" : this.liftOthers
    }
  }

}
