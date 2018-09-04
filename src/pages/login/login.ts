import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  entrar2(){
		const loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		loader.present();

		this.navCtrl.push(InicioPage);
  }
  register(){
    this.navCtrl.push(RegisterPage)
  }

}
