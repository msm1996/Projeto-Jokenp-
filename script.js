const pontuaçao = document.querySelector(".pontuaçao")
const humano = document.querySelector(".ponto-1")
const maquine = document.querySelector(".ponto-2")


let pontosHumanos = 0
let pontosMaquina = 0

const jogar = (etapa1) => {

    resultado(etapa1, maquina())

}

const maquina = () => {

    const jogo = ['pedra', 'papel', 'tesoura']
    const numeros = Math.floor(Math.random() * 3)

    return jogo[numeros]
}

const resultado = (jogador, maquina) => {

    console.log("humano:" + jogador + "maquina" + maquina)

    if (jogador === maquina) {
        pontuaçao.innerHTML = "Empate!"

    } else if (
        (jogador === 'pedra' && maquina === 'tesoura') ||
        (jogador === 'papel' && maquina === 'pedra') ||
        (jogador === 'tesoura' && maquina === 'papel')
    ) {
        pontosHumanos++
        humano.innerHTML = pontosHumanos
        pontuaçao.innerHTML = "Você ganhou!"
    } else {
        pontosMaquina++
        maquine.innerHTML = pontosMaquina
        pontuaçao.innerHTML = "Você perdeu para a maquina!"
    }

}





