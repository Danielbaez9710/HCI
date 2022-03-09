import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCalifPage } from './../modal-calif/modal-calif.page';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(public modal:ModalController ) { }

  ngOnInit() {
  }
  async openMovie() {
    const modal = await this.modal.create({
      component: ModalCalifPage
    });

    return await modal.present();
  }
}
