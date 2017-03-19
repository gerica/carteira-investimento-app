import { OperacaoSaida } from './../../../model/carteira/operacao-saida';
import { acoes } from './opcao-entrada';
import { OperacaoEntrada } from './../../../model/carteira/operacao-entrada';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: 'modalOpcoesEntrada.html'
})
export class ModalOpcoesEntrada implements OnInit {
    operacao: OperacaoEntrada;
    saida: OperacaoSaida;
    acao: string;
    titulo: string;
    acoes: string[] = acoes;

    constructor(public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController) {
    }

    ngOnInit() {
        this.operacao = this.params.get('operacao');
        this.acao = this.params.get('acao');
        this.titulo = this.acao;
        this.saida = new OperacaoSaida();
        this.saida.operacaoEntrada = this.operacao;
        this.saida.papel = this.operacao.papel;
        this.parseData();
        if (this.operacao.tipoOperacao === 'Comprar') {
            this.saida.tipoOperacao = 'Vender';
        } else {
            this.saida.tipoOperacao = 'Comprar';
        }
    }

    public onSubmit(event: any): void {
        event.preventDefault();
        this.dismiss(this.acao);

    }

    public dismiss(acao: string) {        
        this.viewCtrl.dismiss({
            acao: acao,
            operacao: this.operacao,
            saida: this.saida
        });
    }

    private parseData(): void {
        let dataLocal = new Date();
        let ano = dataLocal.toLocaleDateString().substring(6, 10);
        let mes = dataLocal.toLocaleDateString().substring(3, 5);
        let dia = dataLocal.toLocaleDateString().substring(0, 2);
        this.saida.data = ano + '-' + mes + '-' + dia;
    }

}