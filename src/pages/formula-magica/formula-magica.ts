import { Papel } from './../../model/papel';
import { AcaoService } from './../../services/acao.service';
import { Component } from '@angular/core';
import { LoadingController, ToastController, Toast, Loading } from "ionic-angular";

@Component({
  selector: 'page-formula-magica',
  templateUrl: 'formula-magica.html',
  providers: [AcaoService]
})
export class FormulaMagicaPage {
  papeisTop5: Papel[];
  loading: Loading;
  toast: Toast;
  constructor(private acaoSrv: AcaoService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

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

  private createLoading(content: string): void {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
  }

  private createToast(message: string) {
    this.toast = this.toastCtrl.create({
      message: message,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    this.toast.present();
  }


}
