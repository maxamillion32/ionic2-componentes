import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('msg'))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
