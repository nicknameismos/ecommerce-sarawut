import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImageListComponent } from './image-list';

@NgModule({
  declarations: [
    ImageListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ImageListComponent
  ]
})
export class ImageListComponentModule {}
