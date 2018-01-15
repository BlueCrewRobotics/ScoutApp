import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PredictionsPage } from '../predictions/predictions';

@IonicPage()
@Component({
  selector: 'page-predictions-tab',
  templateUrl: 'predictions-tab.html',
})
export class PredictionsTabPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    ) {
  }

  getPredictions() {
    let modal = this.modalCtrl.create(PredictionsPage);
    modal.present();
  }

}
