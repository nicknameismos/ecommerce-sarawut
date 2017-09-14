import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteOrderedPage } from './complete-ordered';

@NgModule({
  declarations: [
    CompleteOrderedPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteOrderedPage),
  ],
  exports: [
    CompleteOrderedPage
  ]
})
export class CompleteOrderedPageModule {}
