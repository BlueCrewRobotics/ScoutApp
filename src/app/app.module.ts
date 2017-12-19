import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TeamsPage } from '../pages/teams/teams';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { MatchesPage } from '../pages/matches/matches';
import { TeamDataPage } from '../pages/team-data/team-data';
import { AddTeamPage } from '../pages/add-team/add-team';
import { EditTeamPage } from '../pages/edit-team/edit-team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamsProvider } from '../providers/teams/teams';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TeamsPage,
    TabsPage,
    SettingsPage,
    MatchesPage,
    TeamDataPage,
    AddTeamPage,
    EditTeamPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TeamsPage,
    TabsPage,
    SettingsPage,
    MatchesPage,
    TeamDataPage,
    AddTeamPage,
    EditTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamsProvider,
  ]
})
export class AppModule {}
