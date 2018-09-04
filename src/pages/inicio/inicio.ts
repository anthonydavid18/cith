import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoachPage } from '../coach/coach';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  ir_coach(){
		this.navCtrl.push(CoachPage);
  }

}
