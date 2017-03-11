import { Http, Headers } from '@angular/http';
import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var firebase: any;

@Injectable()
export class AcaoService {
    papeisFundamento: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {

    }

    public recuperarLista(): FirebaseListObservable<any> {
        this.papeisFundamento = this.af.database.list('/formulaMagica');
        return this.papeisFundamento;
    }

    public recuperarListaTop5(): FirebaseListObservable<any> {
        this.papeisFundamento = this.af.database.list('/formulaMagica', {
            query: {
                orderByChild: 'rank',
                startAt: 1,
                endAt: 5
            }
        });
        return this.papeisFundamento;
    }

}