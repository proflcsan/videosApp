import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomJerryPageRoutingModule } from './tom-jerry-routing.module';

import { TomJerryPage } from './tom-jerry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomJerryPageRoutingModule
  ],
  declarations: [TomJerryPage]
})
export class TomJerryPageModule {}
