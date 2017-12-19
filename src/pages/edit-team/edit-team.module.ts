import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTeamPage } from './edit-team';

@NgModule({
  declarations: [
    EditTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTeamPage),
  ],
})
export class EditTeamPageModule {}
