// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

(function(){
    let exercicio = '06'
    let indice = `Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.\n`
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

const jurosSimples = (ci, jrs, tmp) => (ci + (ci * jrs * tmp)).toFixed(2)
const jurosComposto = (ci, jrs, tmp) => (ci * (1 + jrs) ** tmp).toFixed(2)

let ci = 1000 // Capital Inicial
let jrs = 0.02 // Taxa de juros
let tmp = 48 // Tempo de aplicação 

console.log(`Juros Simples:     ${jurosSimples(ci,jrs,tmp)}`)
console.log(`Juros Composto:    ${jurosComposto(ci,jrs,tmp)}`)
