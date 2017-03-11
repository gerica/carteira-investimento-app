import { Usuario } from './../../model/usuario';
import { LoadingController, ToastController } from 'ionic-angular';
import { PageBase } from './../page.base';
import { OperacaoEntrada } from './../../model/carteira/operacao-entrada';
import { OperacaoService } from './../../services/operacao.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [OperacaoService]
})
export class HomePage extends PageBase {
  entradas: OperacaoEntrada[];
  totalQuantidade: number;
  totalValor: number;
  checkAgrupar: boolean = true;

  constructor(public auth: AuthService,
    private operacaoService: OperacaoService,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);

  }

  ionViewWillEnter() {
    this.recuperarOperacoes();
  }

  public recuperarOperacoes() {
    if (this.auth.authenticated()) {
      this.createLoading('Carregando...');
      this.auth.getProfile()
        .then(profile => {
          console.log(profile);
          this.recuperarOperacoesEntrada(profile);
        })
        .catch(err => {
          this.loading.dismiss();
          this.createToast(err.message);
        });
    }
  }

  public recuperarOperacoesEntrada(usuario: Usuario): void {
    this.operacaoService.getOperacaoEntradaByUsuario(usuario).subscribe(
      (data: OperacaoEntrada[]) => {

        this.entradas = data.filter(el => {
          if (el.quantidade > 0)
            return el;
        });
        if (this.checkAgrupar) {
          this.onAgruparPapel(this.checkAgrupar);
        } else {
          this.calcularTotais();
        }
        this.loading.dismiss();
      },
      error => {
        this.loading.dismiss();
        this.createToast(error.message);
      }
    );
  }

  onAgruparPapel(checked: boolean) {
    this.checkAgrupar = checked;
    const entradasAgrupada: OperacaoEntrada[] = [];

    if (this.checkAgrupar) {
      this.calcularTotais();
      for (let e of this.entradas) {
        const incluido = entradasAgrupada.find((element, index, array) => {
          if (e.papel.papel === element.papel.papel) {
            return true;
          } else {
            return false;
          }
        })

        if (incluido) {
          for (let ea of entradasAgrupada) {
            if (e.papel.papel === ea.papel.papel) {
              // console.log(ea);
              ea.quantidade += e.quantidade;
              if (!ea.total) {
                ea.total = 0;
              }
              ea.total += e.total;
              ea.precoUnitario = ea.total / ea.quantidade;
            }
          }
        } else {
          entradasAgrupada.push(e);
        }
      }
      this.entradas = entradasAgrupada;
      this.calcularTotais();

    } else {
      this.recuperarOperacoes();
    }

  }

  private calcularTotais(): void {
    this.totalQuantidade = 0;
    this.totalValor = 0;
    for (let e of this.entradas) {
      e.total = (e.precoUnitario * e.quantidade) + e.despesa;
      this.totalQuantidade += e.quantidade;
      this.totalValor += e.total;
    }
  }
}