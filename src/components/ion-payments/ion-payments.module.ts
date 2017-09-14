import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonPaymentsComponent } from './ion-payments';

@NgModule({
  declarations: [
    IonPaymentsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    IonPaymentsComponent
  ]
})
export class IonPaymentsComponentModule {}
