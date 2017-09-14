import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PaymentComponent } from './payment';

@NgModule({
  declarations: [
    PaymentComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentComponentModule {}
