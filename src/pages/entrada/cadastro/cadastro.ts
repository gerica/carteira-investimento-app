import { PageBase } from './../../page.base';
import { LoadingController, ToastController } from 'ionic-angular';
import { Usuario } from './../../../model/usuario';
import { OperacaoService } from './../../../services/operacao.service';
import { AuthService, PROFILE } from './../../../services/auth.service';
import { PapelService } from './../../../services/papel.service';
import { Papel } from './../../../model/papel';
import { OperacaoEntrada } from './../../../model/carteira/operacao-entrada';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [PapelService, OperacaoService]
})
export class CadastroPage extends PageBase {
  operacao: OperacaoEntrada = new OperacaoEntrada();
  papeis: Papel[];

  constructor(public navCtrl: NavController,
    private papelService: PapelService,
    private auth: AuthService,
    private operacaoService: OperacaoService,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);
  }

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

  public onSubmit() {
    console.log(this.operacao);
    this.createLoading('Salvando...');
    this.auth.fetchInfo(PROFILE)
      .then((profile: string) => {
        let user: Usuario = JSON.parse(profile);
        this.operacao.user_id = user.user_id;
        this.operacaoService.gravar(this.operacao);
        // this.novo();
        this.loading.dismiss();
        this.createToast('Operação Realizada com sucesso.')
        this.navCtrl.pop();
      }).catch(err => {
        this.loading.dismiss();
        this.createToast(err.message);
      });
  }

  private novo(): void {
    this.operacao = new OperacaoEntrada();
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
