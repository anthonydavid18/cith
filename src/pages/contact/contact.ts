import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PromosPage} from '../promos/promos';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  promos(){
		this.navCtrl.push(PromosPage);
  }
}
