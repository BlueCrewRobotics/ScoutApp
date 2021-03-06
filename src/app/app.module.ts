import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { TeamDataPage } from '../pages/team-data/team-data';
import { AddTeamPage } from '../pages/add-team/add-team';
import { EditTeamPage } from '../pages/edit-team/edit-team';
import { AddMatchPage } from '../pages/add-match/add-match';
import { SigninPage } from '../pages/signin/signin';
import { InitialTutorialPage } from '../pages/initial-tutorial/initial-tutorial';
import { CreditsPage } from '../pages/credits/credits';
import { PredictionsTabPage } from '../pages/predictions-tab/predictions-tab';
import { PredictionsPage } from '../pages/predictions/predictions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamsProvider } from '../providers/teams/teams';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    TeamDataPage,
    AddTeamPage,
    EditTeamPage,
    AddMatchPage,
    SigninPage,
    InitialTutorialPage,
    CreditsPage,
    PredictionsTabPage,
    PredictionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    TeamDataPage,
    AddTeamPage,
    EditTeamPage,
    AddMatchPage,
    SigninPage,
    InitialTutorialPage,
    CreditsPage,
    PredictionsTabPage,
    PredictionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamsProvider,
    InAppBrowser
  ]
})
export class AppModule {}
