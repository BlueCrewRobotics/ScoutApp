import { Component } from '@angular/core';

import { TeamsPage } from '../teams/teams';
import { MatchesPage } from '../matches/matches';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeamsPage;
  tab2Root = MatchesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
