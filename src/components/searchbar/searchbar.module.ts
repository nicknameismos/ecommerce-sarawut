import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchbarComponent } from './searchbar';

@NgModule({
  declarations: [
    SearchbarComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchbarComponentModule {}
