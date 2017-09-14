import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CounterserviceComponent } from './counterservice';

@NgModule({
  declarations: [
    CounterserviceComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CounterserviceComponent
  ]
})
export class CounterserviceComponentModule {}
