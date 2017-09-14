import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProductPage } from './list-product';

@NgModule({
  declarations: [
    ListProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProductPage),
  ],
  exports: [
    ListProductPage
  ]
})
export class ListProductPageModule {}
