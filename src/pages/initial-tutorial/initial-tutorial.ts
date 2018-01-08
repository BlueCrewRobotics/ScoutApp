import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-initial-tutorial',
  templateUrl: 'initial-tutorial.html',
})
export class InitialTutorialPage {

  constructor(
    public viewCtrl: ViewController
    ){
  }

  close() {
    this.viewCtrl.dismiss();
  }

  slides = [
    {
      title: "Welcome to Scout!",
      description: "<b>Scout</b> allows you to easily scout FRC teams, add live match scoring, and more! Gone are the days of paper scouting!",
      image: "assets/imgs/crew.png",
    },
    {
      title: "How do I use Scout?",
      description: "Simply add teams and match data by tapping the plus in the righthand corner. When you have an internet connection, tap the cloud icon to upload your data for the whole team to see.",
      image: "assets/imgs/cloud.png",
    }
  ];

}
