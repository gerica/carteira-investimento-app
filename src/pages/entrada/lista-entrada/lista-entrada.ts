import { OperacaoSaida } from './../../../model/carteira/operacao-saida';
import { ModalOpcoesEntrada } from './modal-opcoes-entrada';
import { OpcaoEntradaPage, acoes } from './opcao-entrada';
import { Usuario } from './../../../model/usuario';
import { PageBase } from './../../page.base';
import {
  LoadingController,
  ToastController,
  PopoverController,
  ModalController
} from 'ionic-angular';
import { OperacaoService } from './../../../services/operacao.service';
import { AuthService, PROFILE } from './../../../services/auth.service';
import { OperacaoEntrada } from './../../../model/carteira/operacao-entrada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-lista-entrada',
  templateUrl: 'lista-entrada.html',
  providers: [OperacaoService]
})
export class ListaEntradaPage extends PageBase implements OnInit {
  entradas: OperacaoEntrada[];
  totalQuantidade: number;
  totalValor: number;
  checkAgrupar: boolean = true;
  usuario: Usuario;

  constructor(public auth: AuthService,
    private operacaoService: OperacaoService,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);

  }

  ngOnInit() {
    console.clear();
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

  public onOpcoes(item: OperacaoEntrada, event: MouseEvent): void {
    const popover = this.popoverCtrl.create(OpcaoEntradaPage, { item: item });
    popover.present({ ev: event });
    popover.onDidDismiss(data => {
      if (!data) {
        return;
      } else if (data.action === acoes[0]) {
        this.modalOpcoes(data.item, acoes[0])
      } else if (data.action === acoes[1]) {
        this.modalOpcoes(data.item, acoes[1])
      } else if (data.action === acoes[2]) {
        this.modalOpcoes(data.item, acoes[2])
      } else if (data.action === acoes[3]) {
        return;
      }

    });
  }

  private modalOpcoes(operacao: OperacaoEntrada, acao: string): void {
    let modal = this.modalCtrl.create(ModalOpcoesEntrada, { operacao: operacao, acao: acao });
    modal.present();
    modal.onDidDismiss(data => {
      if (!data) {
        return;
      } else if (data.acao === acoes[0]) {
        return;
      } else if (data.acao === acoes[1]) {
        this.gravarOperacaoSaida(data.saida);
      } else if (data.acao === acoes[2]) {
        this.excluir(data.operacao);
      }
    });
  }

  private excluir(operacao: OperacaoEntrada): void {
    this.operacaoService.excluir(operacao)
      .then(() => {
        this.createToast('Operação Realizada com sucesso.');
      })
      .catch(error => {
        this.createToast(error.message);
      });
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

  private gravarOperacaoSaida(operacaoSaida: OperacaoSaida): void {

    if (this.validateQuantidade(operacaoSaida)) {

      this.auth.fetchInfo(PROFILE)
        .then((profile: string) => {
          let user: Usuario = JSON.parse(profile);
          operacaoSaida.user_id = user.user_id;
          this.operacaoService.gravarSaida(operacaoSaida);
          this.operacaoService.atualizarEntrada(operacaoSaida);
          this.createToast('Operação Realizada com sucesso.')
        }).catch(err => {
          this.createToast(err.message);
        });
    } else {
      this.createToast('A quantidade informada é maior que a existente.')
    }
  }

  private validateQuantidade(operacaoSaida: OperacaoSaida): boolean {
    if (operacaoSaida.quantidade > operacaoSaida.operacaoEntrada.quantidade) {
      return false;
    }
    return true;
  }

}
