import { EntradaPage } from './../pages/entrada/entrada';
import { FormulaMagicaPage } from './../pages/formula-magica/formula-magica';
import { PageMenu } from './../model/page.menu';
import { PageMenuService } from './../services/page-menu.service';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any, show: boolean }>;

  rootPage: any = HomePage;

  constructor(public platform: Platform,
    private authService: AuthService,
    private pageMenuSrc: PageMenuService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    pageMenuSrc.addPage(PageMenu.HOME, HomePage, true);
    pageMenuSrc.addPage(PageMenu.FORMULA_MAGICA, FormulaMagicaPage, true);
    pageMenuSrc.addPage(PageMenu.ENTRADA, EntradaPage, false);
    this.pages = pageMenuSrc.pages;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
