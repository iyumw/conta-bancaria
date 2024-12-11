import { colors } from "../util/cores";

export class Conta {
    private _numConta: number;
    private _numAgencia: number;
    private _tipoConta: number;
    private _titular: string;
    private _saldo: number;

	constructor(_numConta: number, _numAgencia: number, _tipoConta: number, _titular: string, _saldo: number) {
		this._numConta = _numConta;
		this._numAgencia = _numAgencia;
		this._tipoConta = _tipoConta;
		this._titular = _titular;
		this._saldo = _saldo;
	}
    
	public get_numConta(): number {
		return this._numConta;
	}

	public get_numAgencia(): number {
		return this._numAgencia;
	}

	public get_tipoConta(): number {
		return this._tipoConta;
	}

	public get_titular(): string {
		return this._titular;
	}

	public get_saldo(): number {
		return this._saldo;
	}

	public set_numConta(value: number) {
		this._numConta = value;
	}

	public set_numAgencia(value: number) {
		this._numAgencia = value;
	}

	public set_tipoConta(value: number) {
		this._tipoConta = value;
	}

	public set_titular(value: string) {
		this._titular = value;
	}

	public set_saldo(value: number) {
		this._saldo = value;
	}
    
// Métodos
    public visualizar(): void {
        console.log(colors.fg.magenta + "\n" + "=".repeat(25) + "❀ Dados da Conta ❀" + "=".repeat(26) + "\n" + colors.reset)
        console.log("Numero da Conta: " + this._numConta)
        console.log("Numero da Agencia: " + this._numAgencia)
        console.log("Tipo da Conta: " + (this._tipoConta === 1? "Conta Corrente" : "Conta Poupanca"))
        console.log("Titular: " + this._titular)
        console.log("Saldo: R$ " + this._saldo.toFixed(2))
    }

    public sacar(valor: number): boolean {
        if(valor > this._saldo){
            console.log(colors.fg.red + "Saldo insuficiente!" + colors.reset);
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void {
        if(valor <= 0){
            console.log(colors.fg.red + "Valor invalido!" + colors.reset);
            return;
        }
        
        this._saldo += valor;
    }
}