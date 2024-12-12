import { colors } from "../util/cores";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  private _limite: number;

  constructor(
    numConta: number,
    numAgencia: number,
    tipoConta: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numConta, numAgencia, tipoConta, titular, saldo);
    this._limite = limite;
  }

	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Limite: R$ " + this._limite.toFixed(2));
    }

    public sacar(valor: number): boolean {
        // Verifica se o saque é maior que o saldo disponível + limite
        if (valor > (this.saldo + this._limite)) {
            console.log('Saldo Insuficiente!');
            return false;
        }
    
        // Atualiza o saldo
        this.saldo -= valor;
        return true;
    }

}
