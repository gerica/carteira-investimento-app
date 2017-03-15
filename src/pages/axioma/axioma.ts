import { AuthService } from './../../services/auth.service';
import { AxiomaDetalhePage } from './axioma-detalhe/axioma-detalhe';
import { Axioma } from './../../model/axioma';
import { NavController } from 'ionic-angular';
import { axiomas } from './../../data/axiomas';
import { Component } from '@angular/core';

@Component({
  selector: 'page-axioma',
  templateUrl: 'axioma.html'
})
export class AxiomaPage {
  axiomas = axiomas;

  constructor(public navCtrl: NavController,
    private auth: AuthService) { }

  itemSelected(item: Axioma) {
    this.navCtrl.push(AxiomaDetalhePage, { axioma: item });
  }

}
