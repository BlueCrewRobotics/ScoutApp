import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { PredictionsTabPage } from '../predictions-tab/predictions-tab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  settingsTab = SettingsPage;
  predictionsTab = PredictionsTabPage;

  constructor() {

  }
}
