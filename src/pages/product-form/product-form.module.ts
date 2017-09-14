import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductFormPage } from './product-form';

@NgModule({
  declarations: [
    ProductFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductFormPage),
  ],
  exports: [
    ProductFormPage
  ]
})
export class ProductFormPageModule {}
