import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    private _aniversario: number;


	constructor(numConta: number, numAgencia: number, tipoConta: number, titular: string, saldo: number, aniversario: number) {
        super(numConta, numAgencia, tipoConta,titular, saldo)
		this._aniversario = aniversario;
	}


	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(aniversario: number) {
		this._aniversario = aniversario;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversario: " + this._aniversario);
    }


}