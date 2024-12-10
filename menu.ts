import readlinesync = require('readline-sync');
import { colors } from './util/cores';

export function main() {
    let opcao: number

    while (true) {
        menu()
        opcao = readlinesync.questionInt()

        switch(opcao){
            case 1:
                console.log("\nCriar Conta\n");
                break
            case 2:
                console.log("\nListar todas as Contas\n");
                break
            case 3:
                console.log("\nConsultar dados da Conta - por número\n");
                break
            case 4:
                console.log("\nAtualizar dados da Conta\n");
                break
            case 5:
                console.log("\nApagar uma Conta\n");
                break;
            case 6:
                console.log("\nSaque\n");
                break;
            case 7:
                console.log("\nDepósito\n");
                break;
            case 8:
                console.log("\nTransferência entre Contas\n");
                break;
            case 9:
                about()
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

main();