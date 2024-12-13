import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Array para armazenar objetos do tipo conta
    // Injeção de dependências
    private listaContas = new Array<Conta>();

    // Controla os numeros das contas
    // O valor vai ser acessado no Menu.ts
    public numero: number = 0;

    pesquisar(numero: number): void {
        const buscarConta = this.buscarNumero(numero);

        if(buscarConta !== null) { 
            console.log("Conta encontrada!");
            buscarConta.visualizar();
        } else
            console.log("Conta não encontrada!");
    }
    listar(): void {
        for(let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("Conta cadastrada com sucesso!!")
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numeroConta: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numeroConta: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numeroConta: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(contaOrigem: number, contaDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    // Métodos auxiliares
    public gerarNum(): number {
        return ++this.numero;
    } 

    public buscarNumero(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if(conta.numConta === numero)
                return conta;
        }

        return null;
    }
}