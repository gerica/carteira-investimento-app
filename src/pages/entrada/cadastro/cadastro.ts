import { PapelService } from './../../../services/papel.service';
import { Papel } from './../../../model/papel';
import { OperacaoEntrada } from './../../../model/carteira/operacao-entrada';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [PapelService]
})
export class CadastroPage {
  operacao: OperacaoEntrada = new OperacaoEntrada();
  papeis: Papel[];

  constructor(public navCtrl: NavController,
    private papelService: PapelService) { }

  ionViewWillEnter() {
    // console.log('teste');
    console.clear();
    this.parseData();
    this.getPapeis();

  }

  public parseData(): void {
    let dataLocal = new Date();
    let ano = dataLocal.toLocaleDateString().substring(6, 10);
    let mes = dataLocal.toLocaleDateString().substring(3, 5);
    let dia = dataLocal.toLocaleDateString().substring(0, 2);
    this.operacao.data = ano + '-' + mes + '-' + dia;
  }

  private getPapeis(): void {
    this.papelService.getPapeis().subscribe(
      (data: Papel[]) => {
        this.papeis = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
