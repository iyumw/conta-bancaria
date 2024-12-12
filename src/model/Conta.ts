import { colors } from "../util/cores";

export class Conta {
    private _numConta: number;
    private _numAgencia: number;
    private _tipoConta: number;
    private _titular: string;
    private _saldo: number;

	constructor(numConta: number, numAgencia: number, tipoConta: number, titular: string, saldo: number) {
		this._numConta = numConta;
		this._numAgencia = numAgencia;
		this._tipoConta = tipoConta;
		this._titular = titular;
		this._saldo = saldo;
	}
    

	public get numConta(): number {
		return this._numConta;
	}

	public get numAgencia(): number {
		return this._numAgencia;
	}

	public get tipoConta(): number {
		return this._tipoConta;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numConta(value: number) {
		this._numConta = value;
	}

	public set numAgencia(value: number) {
		this._numAgencia = value;
	}

	public set tipoConta(value: number) {
		this._tipoConta = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
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

    public sacar(valor: number): boolean{
        if(valor > this._saldo){
            console.log('Saldo Insuficiente!');
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