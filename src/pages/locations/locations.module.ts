import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsPage } from './locations';

@NgModule({
  declarations: [
    LocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsPage),
  ],
  exports: [
    LocationsPage
  ]
})
export class LocationsPageModule {}
