import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDataPage } from './team-data';

@NgModule({
  declarations: [
    TeamDataPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamDataPage),
  ],
})
export class TeamDataPageModule {}
