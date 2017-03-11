import { Usuario } from './../model/usuario';
import { OperacaoSaida } from './../model/carteira/operacao-saida';
import { OperacaoEntrada } from './../model/carteira/operacao-entrada';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class OperacaoService {
    private _fireBaseDB: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
    }

    public gravar(operacaoEntrada: OperacaoEntrada): void {
        this._fireBaseDB = this.af.database.list('/operacaoEntrada');
        operacaoEntrada.converterCampos();
        this._fireBaseDB.push(operacaoEntrada);
    }

    public gravarSaida(operacao: OperacaoSaida): void {
        this._fireBaseDB = this.af.database.list('/operacaoSaida');
        operacao.converterCampos();
        this._fireBaseDB.push(operacao);
    }

    public atualizarEntrada(operacao: OperacaoSaida): void {
        this._fireBaseDB = this.af.database.list('/operacaoEntrada');
        operacao.operacaoEntrada.quantidade = operacao.operacaoEntrada.quantidade - operacao.quantidade;
        this._fireBaseDB.update(operacao.operacaoEntrada.$key, operacao.operacaoEntrada);
    }

    public getOperacaoEntradaByUsuario(usuario: Usuario): FirebaseListObservable<any[]> {
        console.log(usuario.user_id);
        const queryObservable = this.af.database.list('/operacaoEntrada', {
            query: {
                orderByChild: 'user_id',
                equalTo: usuario.user_id
            }
        });
        return queryObservable;
    }

    public getOperacaoSaidaByUsuario(usuario: Usuario): FirebaseListObservable<any[]> {
        const queryObservable = this.af.database.list('/operacaoSaida', {
            query: {
                orderByChild: 'user_id',
                equalTo: usuario.user_id
            }
        });
        return queryObservable;
    }


    public excluir(operacaoEntrada: OperacaoEntrada): firebase.Promise<void> {
        this._fireBaseDB = this.af.database.list('/operacaoEntrada');
        return this._fireBaseDB.remove(operacaoEntrada.$key);
    }

}

