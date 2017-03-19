import { OperacaoEntrada } from './../../../model/carteira/operacao-entrada';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

export const acoes = ['Visualizar', 'Saída', 'Apagar', 'Fechar'];

@Component({
    selector: 'pag-sl-options',
    templateUrl: 'opcao-entrada.html'
})
export class OpcaoEntradaPage {
    operacao: OperacaoEntrada;
    acoes = acoes;

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams) {
        this.operacao = this.navParams.get('item');
    }

    onAction(action: string) {
        this.viewCtrl.dismiss({
            action: action,
            item: this.operacao
        });
    }

}