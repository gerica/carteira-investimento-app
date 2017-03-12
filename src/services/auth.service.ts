import { PageMenu } from './../model/page.menu';
import { PageMenuService } from './page-menu.service';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';
import { Storage } from '@ionic/storage';
// import { Observable } from "rxjs/Observable";

export const TOKEN = 'id_token';
export const PROFILE = '_profile';

@Injectable()
export class AuthService {
    // Configure Auth0
    lock = new Auth0Lock('7B6Jko9Th6kGVUFxIUcue8Xk3kV3CoSg', 'rogeriocardoso.auth0.com', {});
    // hasProfile: Observable<boolean>;


    constructor(private storage: Storage,
        private pageMenuSrc: PageMenuService) {
        // this.hasProfile = new Observable(observer => {
        // observer.next(true);
        // observer.complete();
        // });

        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem(TOKEN, authResult.idToken);
            this.storeInfo(TOKEN, authResult.idToken);
            pageMenuSrc.togglePage(PageMenu.ENTRADA);

            // // Fetch profile information
            // this.lock.getProfile(authResult.idToken, (error, profile: Usuario) => {
            //     const profileLocal = JSON.stringify(profile);
            //     localStorage.setItem(PROFILE, profileLocal);
            //     this.storeInfo(PROFILE, profileLocal);                    
            // });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == TOKEN
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(PROFILE);
        this.removeInfo(TOKEN);
        this.removeInfo(PROFILE);
    }

    public fetchInfo(name: string): Promise<any> {
        return this.initStorage()
            .then(() => {
                return this.storage.get(name);
            })
            .catch(err => console.log(err.mesaage));
    }

    public fetchProfile(callBack): void {
        this.fetchInfo(PROFILE)
            .then(p => {
                if (p === undefined || p === null) {
                    this.fetchInfo(TOKEN)
                        .then(token => {
                            // Fetch profile information
                            this.lock.getProfile(token, (error, profile: Usuario) => {
                                const profileLocal = JSON.stringify(profile);
                                localStorage.setItem(PROFILE, profileLocal);
                                this.storeInfo(PROFILE, profileLocal)                                
                                callBack(profileLocal);
                            });
                        })
                        .catch(err => console.log(err.message));
                } else {
                    callBack(p);
                }

            })
            .catch(err => console.log(err.message));

    }

    private storeInfo(name: string, value: any) {
        this.initStorage()
            .then(() => {
                this.storage.set(name, value)
                    .then().catch(
                    err => {
                        console.log(err.message);
                    });
            })
            .catch(err => console.log(err.mesaage));
    }

    private removeInfo(name: string): void {
        this.initStorage()
            .then(() => {
                this.storage.remove(name);
            })
    }

    private initStorage(): Promise<any> {
        return this.storage.ready();
    }


}
