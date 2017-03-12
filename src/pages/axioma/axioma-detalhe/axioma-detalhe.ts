import { Axioma } from './../../../model/axioma';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-axioma-detalhe',
  templateUrl: 'axioma-detalhe.html'
})
export class AxiomaDetalhePage {
  axioma: Axioma;

  constructor(private navParams: NavParams) {
    this.axioma = this.navParams.get('axioma');
  }

  ionViewDidLoad() {
  }

}
