import { Usuario } from './../../model/usuario';
import { LoadingController, ToastController } from 'ionic-angular';
import { PageBase } from './../page.base';
import { OperacaoEntrada } from './../../model/carteira/operacao-entrada';
import { OperacaoService } from './../../services/operacao.service';
import { AuthService, PROFILE } from './../../services/auth.service';
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
  usuario: Usuario;

  constructor(public auth: AuthService,
    private operacaoService: OperacaoService,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);

  }

  ionViewWillEnter() {
    this.recuperarOperacoes();
    // //subscribe
    // project.subscribe(result => console.log('Subscription Streaming:', result));

    // setInterval(() => {
    //   project.next(Math.random());
    //   project.complete();
    // }, 2000);


    // //add delayed subscription AFTER loaded
    // setTimeout(() =>
    //   project.subscribe(result => console.log('Delayed Stream:', result)
    //   ), 3000);

  }

  public recuperarOperacoes() {
    if (this.auth.authenticated()) {
      this.createLoading('Carregando...');
      this.auth.fetchInfo(PROFILE)
        .then((profile: string) => {
          if (profile === undefined || profile === null) {
            this.auth.project
              .subscribe((profile: string) => {
                this.usuario = JSON.parse(profile);
                this.recuperarOperacoesEntrada(this.usuario);
              });
          } else {
            this.usuario = JSON.parse(profile);
            this.recuperarOperacoesEntrada(this.usuario);
          }

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
          if (el.quantidade > 0 && el.user_id == usuario.user_id)
            return el;
        });
        if (this.checkAgrupar) {
          this.onAgruparPapel();
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

  onAgruparPapel() {

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