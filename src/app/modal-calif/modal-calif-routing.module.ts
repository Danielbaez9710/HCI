import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCalifPage } from './modal-calif.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCalifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCalifPageRoutingModule {}
