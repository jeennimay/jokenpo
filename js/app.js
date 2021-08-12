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