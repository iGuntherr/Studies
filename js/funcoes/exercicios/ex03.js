// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


(function(){
    let exercicio = '03'
    let indice = 'Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.\n'
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

const potencia = (base, expoente) => {
    return base ** expoente
}

let base = 2
let expoente = 4
console.log(`Base: ${base}\nExpoente: ${expoente}\nCalculo: ${potencia(base, expoente)}`)