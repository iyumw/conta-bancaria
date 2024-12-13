import readlinesync = require('readline-sync');
import { colors } from './src/util/cores';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {
    let opcao, numero, agencia, saldo, limite, aniversario, tipo: number
    let titular: string;

    // Pra selecionar o tipo de conta no menu
    const tipoContas = ['Conta Corrente', 'Conta Poupanca']

    // Criando um objeto da classe ContaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNum(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNum(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNum(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNum(), 5698, 2, "Jean Lima", 15000, 15));

    while (true) {
        menu()
        opcao = readlinesync.questionInt()

        switch(opcao){
            case 1:
                console.log("\nCriar Conta\n");

                console.log("Insira o numero de sua agencia: ");
                agencia = readlinesync.questionInt('');
                
                console.log("Insira o nome do titular: ");
                titular = readlinesync.question('');

                console.log("Escolha o tipo da conta: ");
                // tipoContas é o que aparece pro usuário
                // cancel : false evita que o usuário cancele a operação
                // +1 porque o vetor começa no 0
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel : false}) + 1;

                console.log("Insira o saldo da conta: ");
                saldo = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1: 
                        // Conta Corrente
                        console.log("Insira o limite da conta: ");
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNum(), agencia, tipo, titular, saldo, limite)) // Instancia o objeto e manda o objeto pro ContaController
                    break;
                    case 2:
                        // Conta Poupanca
                        console.log("Insira o dia do aniversario da poupanca: ");
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNum(), agencia, tipo, titular, saldo, aniversario));
                    break;
                }

                keyPress();
                break
            case 2:
                console.log("\nListar todas as Contas\n");
                contas.listar();
                keyPress();
                break
            case 3:
                console.log("\nConsultar dados da Conta - por número\n");

                console.log("Digite o numero da conta: ")
                numero = readlinesync.questionInt('');

                contas.pesquisar(numero);
                keyPress();
                break
            case 4:
                console.log("\nAtualizar dados da Conta\n");
                keyPress();
                break
            case 5:
                console.log("\nApagar uma Conta\n");
                keyPress();
                break;
            case 6:
                console.log("\nSaque\n");
                keyPress();
                break;
            case 7:
                console.log("\nDepósito\n");
                keyPress();
                break;
            case 8:
                console.log("\nTransferência entre Contas\n");
                keyPress();
                break;
            case 9:
                about()
                keyPress();
                break
            default:
                console.log(colors.fg.redstrong + "\nOpcao invalida! Tente novamente." + colors.reset);
                break 
        }
    } 
}

function menu(): void {
    console.log(colors.fg.magenta + "\n" + "=".repeat(30) + "❀ Banco ❀" + "=".repeat(30) + "\n" + colors.reset);
    console.log("   1 - Criar Conta")
    console.log("   2 - Listar todas as contas")
    console.log("   3 - Pesquisar conta por numero")
    console.log("   4 - Atualizar dados da conta")
    console.log("   5 - Apagar conta")
    console.log("   6 - Sacar")
    console.log("   7 - Depositar")
    console.log("   8 - Transferir valores entre contas")
    console.log("   9 - Sair")

    console.log(colors.fg.magenta + "\n","-".repeat(68) ,"\n" + colors.reset)
    console.log(colors.fg.blue + "Digite a opcao desejada: " + colors.reset) 
}

function about() {
    console.log(colors.fg.magentastrong + "\n","=".repeat(22) ,"✨ Programa encerrado! ✨", "=".repeat(20), "\n"+ colors.reset)
    console.log("Desenvolvido por: Isis Yume")
    console.log("GitHub: iyumw")
    console.log("LinkedIn: https://www.linkedin.com/in/isis-okamoto/")
    console.log(colors.fg.magentastrong + "\n","=".repeat(68) ,"\n"+ colors.reset)
    process.exit(0)
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}

main();