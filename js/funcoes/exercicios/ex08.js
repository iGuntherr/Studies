// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

(function(){
    let exercicio = '08'
    let indice = `Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
    registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
    mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
    pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
    vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
    jogo. (Número do pior jogo).\n`
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()


const pontosTemporadas = [102, 77, 105, 98, 97, 60, 121, 122, 50, 130, 100, 103]

const validaTemporadas = pontosTemporadas =>{
    let melhorPontuacao = 0  
    let piorPontuacao = 0
    let qtdPiorPontuacao = 0 
    let qtdMelhorPontuacao = 0

    for(let i in pontosTemporadas){
        if(pontosTemporadas[i] > melhorPontuacao){
            melhorPontuacao = pontosTemporadas[i]
            qtdMelhorPontuacao = i > 0 ? qtdMelhorPontuacao + 1 : 0

        }else if(pontosTemporadas[i] < piorPontuacao || piorPontuacao === 0){
            piorPontuacao = pontosTemporadas[i]
            qtdPiorPontuacao += 1
        }
    }

    return {melhorPontuacao, qtdMelhorPontuacao, piorPontuacao, qtdPiorPontuacao}
}

let resultadoTemporada = validaTemporadas(pontosTemporadas)
console.log(`Melhor pontuação: ${resultadoTemporada.melhorPontuacao}
Atingiu a melhor pontuação ${resultadoTemporada.qtdMelhorPontuacao}
Pior pontuação: ${resultadoTemporada.piorPontuacao}
Atingiu a pior pontuação ${resultadoTemporada.qtdPiorPontuacao} vezes`) 
