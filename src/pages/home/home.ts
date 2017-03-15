import { Usuario } from './../../model/usuario';
import { AuthService, PROFILE } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: Usuario;

  constructor(public auth: AuthService) { }

  ionViewWillEnter() {
    if (this.auth.authenticated()) {

      this.auth.fetchInfo(PROFILE)
        .then((profile: string) => {
          if (profile === undefined || profile === null) {
            this.auth.project
              .subscribe((profile: string) => {
                this.usuario = JSON.parse(profile);
              });
          } else {
            this.usuario = JSON.parse(profile);            
          }

        })
        .catch(err => {
          console.log(err.message);
        });

    }
  }


}