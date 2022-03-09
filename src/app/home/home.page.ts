import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}

  openMenu(){
    this.menu.open();
  }
  
  

  status = 'Enable';
  toggle = [false, true, false, true, true];

  enableDisableRule(idx) {
    if ( this.toggle[idx] ) {
      this.toggle[idx] = false;
      let cnt = 0;
      this.toggle.forEach( e => {
        if ( cnt !== idx ) {
          this.toggle[cnt] = true;
        }
        cnt++;
      });
    } else {
      this.toggle[idx] = true;
    }
    this.status = this.toggle[idx] ? 'Enable' : 'Disable';
  }
}
