import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TestComponent } from './test';

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TestComponent
  ]
})
export class TestComponentModule {}
