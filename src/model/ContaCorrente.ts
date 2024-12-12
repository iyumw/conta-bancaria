import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numConta: number, numAgencia: number, tipoConta: number, titular: string, 
        saldo: number, limite: number) {
        super(numConta, numAgencia, tipoConta, titular, saldo);
        this._limite = limite;
    }
    
    public get limite() {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    public sacar(valor: number): boolean {

        if (valor > (this.saldo + this._limite)) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }

}