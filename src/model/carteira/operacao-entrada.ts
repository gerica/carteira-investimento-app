import { Papel } from './../papel';

export class OperacaoEntrada {
    $key: string;
    data: string;
    tipoOperacao: string;
    precoUnitario: number;
    quantidade: number;
    despesa: number;
    observacao: string;
    papel: Papel;
    user_id: string;

    // apresentar na tela
    total: number;

    public converterCampos() {
        this.precoUnitario = parseFloat(this.precoUnitario.toString().replace(/,/g, '.'));
        this.quantidade = parseFloat(this.quantidade.toString().replace(/,/g, '.'));
        this.despesa = parseFloat(this.despesa.toString().replace(/,/g, '.'));
    }

}