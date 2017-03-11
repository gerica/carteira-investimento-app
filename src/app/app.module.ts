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
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
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
    EntradaPage,
    CadastroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormulaMagicaPage,
    EntradaPage,
    CadastroPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    PageMenuService,
  {
    provide: AuthHttp,
    useFactory: getAuthHttp,
    deps: [Http]
  }]
})
export class AppModule { }
