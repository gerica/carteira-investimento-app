import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PapelService {

    constructor(private af: AngularFire) {
    }

    public getPapeis(): FirebaseListObservable<any> {
        return this.af.database.list('/papeis', {
            query: {
                orderByChild: 'papel'
            }
        });
    }
}

