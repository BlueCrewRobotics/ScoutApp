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
  groundCubes:any;
  returnCubes:any;
  stackCubes:any;
  switch:any;
  scale:any;
  climb:any;
  wins:any;
  losses:any;

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
    this.groundCubes = this.navParams.get('groundCubes');
    this.returnCubes = this.navParams.get('returnCubes');
    this.stackCubes = this.navParams.get('stackCubes');
    this.switch = this.navParams.get('switch');
    this.scale = this.navParams.get('scale');
    this.climb = this.navParams.get('climb');
    this.wins = this.navParams.get('wins');
    this.losses = this.navParams.get('losses');
    this.team = {
      "teamName" : this.name,
      "teamNumber" : this.number,
      "groundCubes" : this.groundCubes,
      "returnCubes" : this.returnCubes,
      "stackCubes" : this.stackCubes,
      "switch" : this.switch,
      "scale" : this.scale,
      "climb" : this.climb,
      "wins" : this.wins,
      "losses" : this.losses
    }
  }

}
