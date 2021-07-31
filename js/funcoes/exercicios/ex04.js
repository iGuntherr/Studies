// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

(function(){
    let exercicio = '04'
    let indice = 'Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.\n'
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

const restoDivisao = (dividendo, divisor) =>{
    return dividendo % divisor
}

let dividendo = 5
let divisor = 2
console.log(`Dividendo: ${dividendo}\nDivisor: ${divisor}\nResto: ${restoDivisao(dividendo, divisor)}`)