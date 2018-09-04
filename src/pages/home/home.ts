import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AboutPage } from '../about/about';

/**
 * Generated class for the PortadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  entrar(){
		this.navCtrl.push(LoginPage);
  }
  register(){
		this.navCtrl.push(RegisterPage);
  }
  eventos(){
		this.navCtrl.push(AboutPage);
  }
}
