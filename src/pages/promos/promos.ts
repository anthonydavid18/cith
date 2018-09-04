import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

/**
 * Generated class for the PromosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromosPage');
  }

}
