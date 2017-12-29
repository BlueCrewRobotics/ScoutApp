import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatchPage } from './add-match';

@NgModule({
  declarations: [
    AddMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatchPage),
  ],
})
export class AddMatchPageModule {}
