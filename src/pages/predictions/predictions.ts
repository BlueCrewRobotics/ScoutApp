import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import { TeamDataPage } from '../team-data/team-data';

@IonicPage()
@Component({
  selector: 'page-predictions',
  templateUrl: 'predictions.html',
})
export class PredictionsPage {

  teams:any;
  calculatedTeams:any[] = [];

  // Define algorithm variables
  groundCubes:number = 1.2;
  exchangeCubes:number = 1.0;
  stackCubes:number = 1.4;
  driveTrain:number = 1.5;
  switch:number = 1.5;
  scale:number = 1.8;
  climb:number = 1.4;
  liftOthers:number = 1.5;

  wins:number = 2.0;
  losses:number = -1.5;
  forces:number = 1.3;
  boosts:number = 1.4;
  levitates:number = 1.5;
  timeScale:number = 2.0;
  timeSwitch:number = 1.8;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public modalCtrl: ModalController
    ) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.storage.get("teams").then((val) => {
      this.teams = JSON.parse(val);
      for (var i = 0, len = this.teams.length; i < len; i++) {
        var team = this.teams[i];

        if (team['groundCubes'] == "Yes") {
          var groundCubes = this.groundCubes;
        } else {
          var groundCubes = 0;
        }

        if (team['returnCubes'] == "Yes") {
          var exchangeCubes = this.exchangeCubes;
        } else {
          var exchangeCubes = 0;
        }

        if (team['stackCubes'] == "Yes") {
          var stackCubes = this.stackCubes;
        } else {
          var stackCubes = 0;
        }

        if (team['driveTrainType'] == "Mecanum") {
          var driveTrain = 0;
        } else {
          var driveTrain = this.driveTrain;
        }

        if (team['scale'] == "Yes") {
          var scale = this.scale;
        } else {
          var scale = 0;
        }

        if (team['climb'] == "Yes") {
          var climb = this.climb;
        } else {
          var climb = 0;
        }

        if (team['liftOthers'] == "Yes") {
          var liftOthers = this.liftOthers;
        } else {
          var liftOthers = 0;
        }

        if (team['switch'] == "Yes") {
          var switchs = this.switch;
        } else {
          var switchs = 0;
        }

        var wins = parseInt(team['wins']) * this.wins;
        var losses = parseInt(team['losses']) * this.losses;
        var forces = parseInt(team['forces']) * this.forces;
        var boosts = parseInt(team['boosts']) * this.boosts;
        var levitates = parseInt(team['levitates']) * this.levitates;
        var timeScale = parseInt(team['timeScale']) * this.timeScale;
        var timeSwitch = parseInt(team['timeSwitch']) * this.timeSwitch;

        var finalScore = groundCubes + exchangeCubes + stackCubes + driveTrain + scale + climb + liftOthers + switchs + wins + losses + forces + boosts + levitates + timeScale + timeSwitch;
        
        var thisTeam = {
          "score" : (finalScore / 100).toFixed(4),
          "teamName" : team['teamName']
        }

        this.calculatedTeams.push(thisTeam);
      }
      this.calculatedTeams.sort(function(a, b){return a.score - b.score});
      this.calculatedTeams.reverse();
    });
  }

  itemSelected(item) {
    this.storage.get("teams").then((val) => {
      var currentTeam = [];
      this.teams = JSON.parse(val);
      for (var i = 0, len = this.teams.length; i < len; i++) {
        if (this.teams[i]['teamName'] == item['teamName']) {
          currentTeam.push(this.teams[i]);
        }
      }
      let modal = this.modalCtrl.create(TeamDataPage, currentTeam[0]);
      modal.present();
    });
  }

}
