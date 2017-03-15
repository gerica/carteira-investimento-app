import { AuthService } from './../../services/auth.service';
import { PageBase } from './../page.base';
import { Papel } from './../../model/papel';
import { AcaoService } from './../../services/acao.service';
import { Component } from '@angular/core';
import { LoadingController, ToastController, Toast, Loading } from "ionic-angular";

@Component({
  selector: 'page-formula-magica',
  templateUrl: 'formula-magica.html',
  providers: [AcaoService]
})
export class FormulaMagicaPage extends PageBase {
  papeisTop5: Papel[];
  loading: Loading;
  toast: Toast;
  constructor(private acaoSrv: AcaoService,
    protected loadingCtrl: LoadingController,
    protected toastCtrl: ToastController,
    private auth: AuthService) {
    super(loadingCtrl, toastCtrl);
  }

  ionViewWillEnter() {
    this.createLoading('Carregando...');
    this.acaoSrv.recuperarListaTop5().subscribe(
      (data: Papel[]) => {
        this.papeisTop5 = data;
        this.loading.dismiss();
      }, err => {
        this.createToast(err.messagem);
      }
    );
  }
}
