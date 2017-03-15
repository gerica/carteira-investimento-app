import { AuthService } from './../../services/auth.service';
import { ListaEntradaPage } from './lista-entrada/lista-entrada';
import { CadastroPage } from './cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html'
})
export class EntradaPage {

  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController,
    private auth: AuthService) { }


  onViewWillEnter() {
    this.viewCtrl.setBackButtonText('Voltar');
  }

  onCadastro() {
    this.navCtrl.push(CadastroPage);
  }


  onPageList() {
    this.navCtrl.push(ListaEntradaPage);
  }

}
