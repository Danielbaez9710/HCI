import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCalifPageRoutingModule } from './modal-calif-routing.module';

import { ModalCalifPage } from './modal-calif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCalifPageRoutingModule
  ],
  declarations: [ModalCalifPage]
})
export class ModalCalifPageModule {}
