import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonOrdersComponent } from './ion-orders';

@NgModule({
  declarations: [
    IonOrdersComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    IonOrdersComponent
  ]
})
export class IonOrdersComponentModule {}
