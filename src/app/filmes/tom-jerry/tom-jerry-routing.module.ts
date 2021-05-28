import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomJerryPage } from './tom-jerry.page';

const routes: Routes = [
  {
    path: '',
    component: TomJerryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomJerryPageRoutingModule {}
