// 11/08/21 - MESA DE TRABALHO
/*
Desafio - Com o professor

Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

    -- Pedra ganha de Tesoura.
    -- Tesoura ganha de Papel.
    -- Papel ganha de Pedra.

Desafio - Mesas de Trabalho

Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:

Refatorar o código, utilizando funções e a estrutura de decisão switch;
Implementar uma regra de que só é declarado o ganhador do jogo após 3 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada partida;
Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado.

*/

// Escolha usuário
const jogador = prompt("Qual o seu nome?");

//Escolha do computador
//função para escolha aleatória
randomChoice = () => {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const option = ["pedra", "papel", "tesoura"];
    return (option[random(0, option.length)]);
}
var computerChoice = randomChoice();
//console.log(computerChoice);


//Escolha do jogador

jogadorOpition = () => {
    document.getElementById("pedra").addEventListener('click', () => { var jogadorChoice = "pedra"; jokenpo(jogadorChoice, computerChoice); });
    document.getElementById("papel").addEventListener('click', () => { var jogadorChoice = "papel"; jokenpo(jogadorChoice, computerChoice); });
    document.getElementById("tesoura").addEventListener('click', () => { var jogadorChoice = "tesoura"; jokenpo(jogadorChoice, computerChoice); });
}

var jogadorChoice = jogadorOpition();

/* const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

pedra.addEventListener('click', () => { var jogadorChoice = "pedra"; jokenpo(jogadorChoice, computerChoice); });
papel.addEventListener('click', () => { var jogadorChoice = "papel"; jokenpo(jogadorChoice, computerChoice); });
tesoura.addEventListener('click', () => { var jogadorChoice = "tesoura"; jokenpo(jogadorChoice, computerChoice); }); */


//const jogador = "Jenni";
function jokenpo(jogadorChoice, computerChoice) {
    if (jogadorChoice == "pedra" && computerChoice == "tesoura") {
        return alert(`Vitoria ${jogador} \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else if (jogadorChoice == "pedra" && computerChoice == "papel") {
        return alert(`Vitoria do Jokenpozinho \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else if (jogadorChoice == "papel" && computerChoice == "tesoura") {
        return alert(`Vitoria do Jokenpozinho \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else if (jogadorChoice == "papel" && computerChoice == "pedra") {
        return alert(`Vitoria ${jogador} \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else if (jogadorChoice == "tesoura" && computerChoice == "pedra") {
        return alert(`Vitoria do Jokenpozinho \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else if (jogadorChoice == "tesoura" && computerChoice == "papel") {
        return alert(`Vitoria ${jogador} \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
    }else{
        return alert("Empate!!" `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`)
    }
}
//console.log(jokenpo("pedra", "papel"));


/*switch (jogadorChoice, computerChoice) {
        case jogadorChoice == "pedra" && computerChoice == "tesoura":
            alert(`Vitoria ${jogador}` `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == "tesoura" && computerChoice == "pedra":
            alert("Vitoria do Jokenpozinho" `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == "papel" && computerChoice == "pedra":
            alert(`Vitoria ${jogador}` `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == "pedra" && computerChoice == "papel":
            alert("Vitoria do Jokenpozinho" `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == "tesoura" && computerChoice == "papel":
            alert(`Vitoria ${jogador} \n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == "papel" && computerChoice == "tesoura":
            alert("Vitoria do Jokenpozinho" `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        case jogadorChoice == computerChoice:
            alert("Empate!" `\n Jokenpozinho: ${computerChoice} \n ${jogador}: ${jogadorChoice}`);
            break;
        //default:
          //  alert("Opção invalida")
          //  break;
    }

}
jokenpo();*/

/*
function jokenpo(){
    if (jogadorChoice == "pedra" && computerChoice == "tesoura") {
        return alert("Vitoria do Jokenpozinho"); //"Pedra quebra tesoura";
    } else if (jogadorChoice == "tesoura" && computerChoice == "pedra") {
        return alert(`Vitoria ${jogador}`); //"Tesoura perde para pedra, pois pedra quebra tesoura";
    } else if (jogadorChoice == "papel" && computerChoice == "pedra") {
        return alert("Vitoria do Jokenpozinho"); //"Papel cobre a pedra";
    } else if (jogadorChoice == "pedra" && computerChoice == "papel") {
        return alert(`Vitoria ${jogador}`); //"Pedra perde para papel, pois papel cobre a pedra";
    } else if (jogadorChoice == "tesoura" && computerChoice == "papel") {
        return alert(`Vitoria ${jogador}`); //"Tesoura corta papel";
    } else if (jogadorChoice == "papel" && computerChoice == "tesoura") {
        return alert("Vitoria do Jokenpozinho"); //"papel perde pois, tesoura corta papel";
    } else (jogadorChoice === computerChoice) {
        return alert("Empate!");
    };
};
*/

/*
//imprimndo no console os resultados
console.log(`Opção do usuário: ${userChoice}`);
console.log(`Opção da máquina: ${computerChoice}`);
console.log(jogoPPT()); */