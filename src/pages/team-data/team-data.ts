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
  dropGear:any;
  collectGear:any;
  climbRope:any;
  highBoiler:any;
  lowBoiler:any;
  collectFuel:any;

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
    this.dropGear = this.navParams.get('dropGears');
    this.collectGear = this.navParams.get('collectGears');
    this.climbRope = this.navParams.get('climbRope');
    this.highBoiler = this.navParams.get('highBoiler');
    this.lowBoiler = this.navParams.get('lowBoiler');
    this.collectFuel = this.navParams.get('collectFuel');
    this.team = {
      "teamName" : this.name,
      "teamNumber" : this.number,
      "dropGears" : this.dropGear,
      "collectGears" : this.collectGear,
      "climbRope" : this.climbRope,
      "highBoiler" : this.highBoiler,
      "lowBoiler" : this.lowBoiler,
      "collectFuel" : this.collectFuel
    }
  }

}
