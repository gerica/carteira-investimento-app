import { Usuario } from './../../model/usuario';
import { LoadingController, ToastController } from 'ionic-angular';
import { PageBase } from './../page.base';
import { AuthService, PROFILE } from './../../services/auth.service';
import { OperacaoService } from './../../services/operacao.service';
import { OperacaoSaida } from './../../model/carteira/operacao-saida';
import { Component } from '@angular/core';

@Component({
  selector: 'page-saida',
  templateUrl: 'saida.html',
  providers: [OperacaoService]
})
export class SaidaPage extends PageBase {
  saidas: OperacaoSaida[];
  mostarTabelaSaidaAll = false;

  constructor(private operacaoService: OperacaoService,
    private auth: AuthService,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);
  }

  ionViewDidLoad() {
    this.recuperarOperacoesSaida();
  }

  public recuperarOperacoesSaida(): void {
    this.createLoading('Carregando...');
    this.auth.fetchInfo(PROFILE)
      .then((profile: string) => {
        let user: Usuario = JSON.parse(profile);
        this.operacaoService.getOperacaoSaidaByUsuario(user).subscribe(
          (data: OperacaoSaida[]) => {
            this.saidas = data;
            this.calcularOperacao();
            this.loading.dismiss();
          },
          error => {
            console.log(error);
          }
        );
      }).catch(err => {
        this.loading.dismiss();
        this.createToast(err.message);
      });


  }

  public showHideTabelaSaidaAll(): void {
    this.mostarTabelaSaidaAll = !this.mostarTabelaSaidaAll;
    for (let x = 0; x < this.saidas.length; x++) {
      this.saidas[x].flagShow = this.mostarTabelaSaidaAll;
    }
  }

  public toggleSaida(operacao: OperacaoSaida): void {
    operacao.flagShow = !operacao.flagShow;
  }

  public calcularOperacao(): void {
    for (let s of this.saidas) {
      s.operacaoEntrada.total = (s.operacaoEntrada.quantidade * s.operacaoEntrada.precoUnitario) - s.operacaoEntrada.despesa;
      s.total = (s.quantidade * s.precoUnitario) - s.despesa;
      s.saldo = s.total - s.operacaoEntrada.total;
    }

  }

}
