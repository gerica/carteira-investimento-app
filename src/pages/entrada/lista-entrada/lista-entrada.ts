import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-lista-entrada',
  templateUrl: 'lista-entrada.html'
})
export class ListaEntradaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEntradaPage');
  }

}
