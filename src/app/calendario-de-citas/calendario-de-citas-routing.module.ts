import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioDeCitasPage } from './calendario-de-citas.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioDeCitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioDeCitasPageRoutingModule {}
