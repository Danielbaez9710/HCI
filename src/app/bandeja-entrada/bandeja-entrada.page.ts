import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.page.html',
  styleUrls: ['./bandeja-entrada.page.scss'],
})
export class BandejaEntradaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.open();
  }
}
