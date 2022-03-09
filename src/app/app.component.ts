import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CerrarSesionPage} from './cerrar-sesion/cerrar-sesion.page';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,public modal:ModalController) {}


  openMenu(){
    this.menu.toggle();
  }
  async out() {
    const modal = await this.modal.create({
      component: CerrarSesionPage
    });

    return await modal.present();
  }
  
}
