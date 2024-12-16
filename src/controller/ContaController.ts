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
        const buscarConta = this.buscarNumero(conta.numConta);

        if(buscarConta !== null) { 
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log("Conta atualizada com sucesso!");
        } else
            console.log("Conta não encontrada!");
    }
    deletar(numero: number): void {
        const buscarConta = this.buscarNumero(numero);

        if(buscarConta !== null) { 
            this.listaContas.splice(this.listaContas.indexOf(buscarConta), 1);
            console.log("Conta deletada com sucesso!");
        } else{
            console.log("Conta não encontrada!");
        }  
    }

    // Métodos bancários
    sacar(numero: number, valor: number): void {
        const buscarConta = this.buscarNumero(numero);

        if(buscarConta !== null && buscarConta.sacar(valor) === true) { 
            console.log("Saque efetuado com sucesso!");
        } else {
            console.log("Conta não encontrada!");
        } 
    }
    depositar(numero: number, valor: number): void {
        const buscarConta = this.buscarNumero(numero);

        if(buscarConta !== null) { 
            buscarConta.depositar(valor);
            console.log("Deposito efetuado com sucesso!");
        } else {
            console.log("Conta não encontrada!");
        } 
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNumero(numeroOrigem);
        const contaDestino = this.buscarNumero(numeroDestino);

        if(contaOrigem !== null && contaDestino !== null) {
            if(contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log("Transferência efetuada com sucesso!");
            } 
        } else {
            console.log("Conta de origem e/ou conta de destino não foi encontrada!");
        }   
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