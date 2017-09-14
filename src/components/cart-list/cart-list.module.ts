import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CartListComponent } from './cart-list';

@NgModule({
  declarations: [
    CartListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartListComponentModule {}
