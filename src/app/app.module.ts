import { InputMaskCurrentDirective } from './../diretives/input-mask-current.directive';
import { ListaEntradaPage } from './../pages/entrada/lista-entrada/lista-entrada';
import { AxiomaDetalhePage } from './../pages/axioma/axioma-detalhe/axioma-detalhe';
import { PageMenuService } from './../services/page-menu.service';
import { AuthService } from './../services/auth.service';
import { CadastroPage } from './../pages/entrada/cadastro/cadastro';
import { EntradaPage } from './../pages/entrada/entrada';
import { FormulaMagicaPage } from './../pages/formula-magica/formula-magica';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { IonicStorageModule } from '@ionic/storage';
import { Http, RequestOptions } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AxiomaPage } from "../pages/axioma/axioma";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

export const firebaseConfig = {
  apiKey: "AIzaSyDhNUrO6kuDGg0jVJucTY0UWJQ49vHv10Q",
  authDomain: "carteira-investimento.firebaseapp.com",
  databaseURL: "https://carteira-investimento.firebaseio.com",
  storageBucket: "carteira-investimento.appspot.com",
  messagingSenderId: "810679544393"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormulaMagicaPage,
    AxiomaPage,
    AxiomaDetalhePage,
    EntradaPage,
    CadastroPage,
    ListaEntradaPage,
    InputMaskCurrentDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormulaMagicaPage,
    AxiomaPage,
    AxiomaDetalhePage,
    EntradaPage,
    CadastroPage,
    ListaEntradaPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    PageMenuService,
  {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }]
})
export class AppModule { }
