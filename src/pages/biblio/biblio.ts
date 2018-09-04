import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BiblioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-biblio',
  templateUrl: 'biblio.html',
})
export class BiblioPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblioPage');
  }

}
