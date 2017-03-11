import { OperacaoEntrada } from './operacao-entrada';
export class OperacaoSaida extends OperacaoEntrada {
    operacaoEntrada: OperacaoEntrada;
    flagShow: boolean = false;
    saldo: number;
}
