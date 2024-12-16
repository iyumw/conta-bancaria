import { Conta } from "../model/Conta";

export interface ContaRepository {
    pesquisar(numeroConta: number): void;
    listar(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numeroConta: number): void;
    procurarTitular(titular: string): void;

    // Métodos bancários
    sacar(numeroConta: number, valor: number): void;
    depositar(numeroConta: number, valor: number): void;
    transferir(contaOrigem: number, contaDestino: number, valor: number): void;
}