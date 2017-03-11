import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public auth: AuthService) { 
    console.log(auth.authenticated());
  }
}
