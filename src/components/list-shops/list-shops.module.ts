import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListShopsComponent } from './list-shops';

@NgModule({
  declarations: [
    ListShopsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListShopsComponent
  ]
})
export class ListItemsComponentModule {}
