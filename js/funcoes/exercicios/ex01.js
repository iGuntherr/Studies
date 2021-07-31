// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
// subtração, multiplicação e divisão desses valores.
(function(){
    let exercicio = '01'
    let indice = 'Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,\nsubtração, multiplicação e divisão desses valores.\n'
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

const calculo = (v1, v2) => {
    console.log(`Soma:          ${v1 + v2}`)
    console.log(`Subtração:     ${v1 - v2}`)
    console.log(`Multiplicação: ${v1 * v2}`)
    console.log(`Divisão:       ${v1 / v2}`)
}

calculo(5, 7)