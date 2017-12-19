import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTeamPage } from './add-team';

@NgModule({
  declarations: [
    AddTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTeamPage),
  ],
})
export class AddTeamPageModule {}
