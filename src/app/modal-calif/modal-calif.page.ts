import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-calif',
  templateUrl: './modal-calif.page.html',
  styleUrls: ['./modal-calif.page.scss'],
})
export class ModalCalifPage implements OnInit {

  constructor(public modal:ModalController) { }

  ngOnInit() {
  }
  /* Funcion para cerrar el modal */
  dismiss() {
    return this.modal.dismiss();
  }

}
