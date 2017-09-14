import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LangaugePage } from './langauge';

@NgModule({
  declarations: [
    LangaugePage,
  ],
  imports: [
    IonicPageModule.forChild(LangaugePage),
  ],
  exports: [
    LangaugePage
  ]
})
export class LangaugePageModule {}
