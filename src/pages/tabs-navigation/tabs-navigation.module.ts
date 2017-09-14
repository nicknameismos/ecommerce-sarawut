import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsNavigationPage } from './tabs-navigation';

@NgModule({
  declarations: [
    TabsNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsNavigationPage),
  ],
  exports: [
    TabsNavigationPage
  ]
})
export class TabsNavigationPageModule {}
